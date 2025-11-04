import { AppBar, Box, Toolbar, Typography, Button, List } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigator = useNavigate();
  const handleCreateCourse = () => {
    navigator("/create_course");
  };
  const handleCreateModule = () => {
    navigator("/create_module");
  };
  const handleMainPage = () => {
    navigator("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            fontWeight={700}
            variant='h6'
            color='white'
            component='div'
            onClick={handleMainPage}
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            CourseList
          </Typography>
          <List sx={{ display: "flex", gap: "5px" }}>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleCreateCourse}
            >
              Create a new course
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleCreateModule}
            >
              Create a new module
            </Button>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
