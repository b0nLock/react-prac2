import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchModules } from "../redux/modulesSlice";
import {
  Box,
  Container,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import { fetchCourses } from "../redux/coursesSlice";

const Course = ({
  dispatch,
  courses,
  modules,
  modulesStatus,
  coursesStatus,
}) => {
  const { courseId } = useParams();

  useEffect(() => {
    if (coursesStatus === "idle") dispatch(fetchCourses());
  }, [dispatch, coursesStatus]);

  useEffect(() => {
    if (modulesStatus === "idle") dispatch(fetchModules());
  }, [dispatch, modulesStatus]);

  const filtered = (modules || []).filter(
    (m) => String(m.courseId) === String(courseId)
  );

  return (
    <>
      <Navbar />
      <Container sx={{ py: "50px" }}>
        {modulesStatus === "loading" && (
          <Typography variant='h3'>Loading...</Typography>
        )}
        {modulesStatus === "succeeded" && (
          <Box>
            <List>
              {courses.map((course) => (
                <ListItem key={course.id}>
                  {course.id === courseId && (
                    <Typography
                      variant='h4'
                      fontWeight='700'
                      sx={{ textAlign: "center", margin: "auto" }}
                    >
                      Курс #{course.id}: {course.title}
                    </Typography>
                  )}
                </ListItem>
              ))}
            </List>
            <Typography variant='h4' fontWeight='600'>
              Список модулей:
            </Typography>
            <List sx={{ bgcolor: "lime", borderRadius: "6px", p: "10px 20px" }}>
              {filtered.length === 0 && (
                <Typography variant='h4'>Модули не найдены</Typography>
              )}
              {filtered.map((module) => (
                <ListItemText key={module.id}>- {module.title}</ListItemText>
              ))}
            </List>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Course;
