import {
  Container,
  Select,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { fetchCourses } from "../api/fetchCourses";
import { postModule } from "../api/postModule";

const FormModule = ({ dispatch, courses, coursesStatus }) => {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      title: "",
      description: "",
      courseId: "",
    },
  });

  const courseList = courses.map((course) => {
    return { value: course.id, label: course.title };
  });

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = (data) => {
    reset();
    dispatch(postModule(data));
    setOpen(true);
  };

  useEffect(() => {
    if (coursesStatus === "idle") dispatch(fetchCourses());
  }, [dispatch, coursesStatus]);

  return (
    <>
      <Navbar />
      <Container sx={{ pt: "50px" }}>
        <Typography variant='h3' fontWeight='700'>
          Создание модуля
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name='title'
            control={control}
            rules={{ required: true }}
            required='true'
            render={({ field }) => (
              <TextField
                sx={{ fontSize: "20px", margin: "10px 0" }}
                label='Title'
                variant='outlined'
                color='secondary'
                {...field}
              />
            )}
          />
          {errors.title && (
            <Typography color='error'>This field is required</Typography>
          )}
          <Controller
            name='description'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                sx={{ fontSize: "20px", margin: "10px 0" }}
                label='Description'
                variant='outlined'
                color='secondary'
                {...field}
              />
            )}
          />
          {errors.description && (
            <Typography color='error'>This field is required</Typography>
          )}
          <Controller
            name='courseId'
            control={control}
            render={({ field }) => (
              <FormControl sx={{ fontSize: "20px", margin: "10px 0" }}>
                <InputLabel id='courseId-label'>Courses</InputLabel>
                <Select label='Courses' {...field}>
                  {courseList.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          <button
            style={{
              backgroundColor: "lime",
              padding: "10px",
              margin: "10px",
              fontSize: "20px",
            }}
            type='submit'
          >
            Опубликовать
          </button>
        </form>
      </Container>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity='success'
          variant='filled'
          sx={{ width: "100%" }}
        >
          Module was successfully created
        </Alert>
      </Snackbar>
    </>
  );
};

export default FormModule;
