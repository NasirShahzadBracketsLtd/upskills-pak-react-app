import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import User from "./pages/User/User.jsx";
import CoursesPage from "./pages/Courses/CoursesPage.jsx";
import CourseDetails from "./components/Course/CourseDetails.jsx";
import { API_BASE_URL } from "./utils/constants.js";
import { USER_ROLE } from "./utils/enum.js";

import axios from "axios";
import CreateUser from "./components/User/CreateUser.jsx";
import CreateCourse from "./components/Course/AddCourse.jsx";
import SingleUser from "./components/User/SingleUser.jsx";
import { ToastContainer } from "react-toastify";
import UpdateUser from "./components/User/UpdateUser.jsx";

function App() {
  const location = useLocation(); // Get the current location
  const hideHeaderPaths = ["/login"]; // Paths where the header should be hidden

  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  return (
    <div
      style={{
        overflow: "auto", // Allows scrolling
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // Internet Explorer and Edge
      }}
    >
      <ToastContainer />
      {shouldShowHeader && (
        <Header isLoggedIn={user?.isLoggedIn} isAdmin={user?.isAdmin} />
      )}
      <div style={{ marginTop: shouldShowHeader ? "6rem" : "0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/update/:userId" element={<UpdateUser />} />
          <Route path="/users/:userId" element={<SingleUser />} />

          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/courses/create-course" element={<CreateCourse />} />
          <Route path="/courses/update-course/:id" element={<CreateCourse />} />

          {/* <Route path="/my-learnings" element={<MyLearnings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
