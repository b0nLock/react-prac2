import { Box, Container, Typography, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import CoursesList from "../components/CoursesList";
import { fetchCourses } from "../api/fetchCourses";

const Home = ({ dispatch, courses, coursesStatus, navigator }) => {
  useEffect(() => {
    if (coursesStatus === "idle") dispatch(fetchCourses());
  }, [dispatch, coursesStatus]);

  return (
    <>
      <Navbar />
      <Container sx={{ pt: "50px" }}>
        <Typography variant='h3' fontWeight='700' sx={{ pb: "20px" }}>
          Список курсов
        </Typography>
        {coursesStatus === "loading" && <CircularProgress color='secondary' />}
        {coursesStatus !== "loading" && courses.length === 0 && (
          <Typography variant='h6'>Курсы не найдены</Typography>
        )}
        {courses.length > 0 && (
          <Box bgcolor='#ae65f7' borderRadius={6}>
            <CoursesList navigator={navigator} courses={courses} />
          </Box>
        )}
      </Container>
    </>
  );
};

export default Home;
