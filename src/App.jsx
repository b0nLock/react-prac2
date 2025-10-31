import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Course from "./pages/Course";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Form />} />
        <Route path='/:courseId' element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
