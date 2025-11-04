import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Course from "./pages/CourseDetails";
import { useDispatch, useSelector } from "react-redux";
import FormCourse from "./pages/FormCourse";
import FormModule from "./pages/FormModule";

function App() {
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses.items);
  const coursesStatus = useSelector((state) => state.courses.status);

  const modules = useSelector((state) => state.modules.items);
  const modulesStatus = useSelector((state) => state.modules.status);

  const navigator = useNavigate();
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              dispatch={dispatch}
              courses={courses}
              coursesStatus={coursesStatus}
              navigator={navigator}
            />
          }
        />
        <Route
          path='/create_course'
          element={
            <FormCourse
              dispatch={dispatch}
              courses={courses}
              coursesStatus={coursesStatus}
              navigator={navigator}
            />
          }
        />
        <Route
          path='/create_module'
          element={
            <FormModule
              dispatch={dispatch}
              courses={courses}
              coursesStatus={coursesStatus}
              navigator={navigator}
              modules={modules}
            />
          }
        />
        <Route
          path='/:courseId'
          element={
            <Course
              dispatch={dispatch}
              courses={courses}
              coursesStatus={coursesStatus}
              modules={modules}
              modulesStatus={modulesStatus}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
