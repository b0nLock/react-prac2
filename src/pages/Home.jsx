import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { fetchCourses } from "../redux/coursesSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses.items);
  const coursesStatus = useSelector((state) => state.courses.status);
  const navigator = useNavigate();

  const handleCourse = (id) => {
    navigator(`/${id}`);
  };

  useEffect(() => {
    if (coursesStatus === "idle") dispatch(fetchCourses());
  }, [dispatch, coursesStatus]);

  return (
    <>
      <Navbar />
      <Container>
        <Box bgcolor='#ae65f7' my={6} borderRadius={6}>
          <List>
            {courses.map((course) => (
              <ListItem key={course.id} disablePadding>
                <ListItemButton onClick={() => handleCourse(course.id)}>
                  <ListItemText
                    primary={`Курс ${course.id}: ${course.title}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </>
  );
};

export default Home;
