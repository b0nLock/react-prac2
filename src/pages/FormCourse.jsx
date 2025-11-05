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
import { postCourse } from "../api/postCourses";
import { useState } from "react";

const FormCourse = ({ dispatch }) => {
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
      category: "",
    },
  });

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit = (data) => {
    reset();
    dispatch(postCourse(data));
    setOpen(true);
  };

  return (
    <>
      <Navbar />
      <Container sx={{ pt: "50px" }}>
        <Typography variant='h3' fontWeight='700'>
          Создание курса
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
            name='category'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                sx={{ fontSize: "20px", margin: "10px 0" }}
                label='Category'
                variant='outlined'
                color='secondary'
                {...field}
              />
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
          Course was successfully created
        </Alert>
      </Snackbar>
    </>
  );
};

export default FormCourse;
