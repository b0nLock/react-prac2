import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigator = useNavigate();
  const newCourseButton = () => {
    navigator("/create");
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
            sx={{ flexGrow: 1 }}
          >
            News
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            onClick={newCourseButton}
          >
            Create a new course
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
