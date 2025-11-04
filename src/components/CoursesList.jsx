import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const CoursesList = ({ navigator, courses }) => {
  const handleCourse = (id) => {
    navigator(`/${id}`);
  };
  return (
    <List>
      {courses.map((course) => (
        <ListItem key={course.id} disablePadding>
          <ListItemButton onClick={() => handleCourse(course.id)}>
            <ListItemText primary={`Курс ${course.id}: ${course.title}`} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default CoursesList;
