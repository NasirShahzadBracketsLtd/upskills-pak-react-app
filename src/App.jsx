import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import User from "./pages/User/User.jsx";
import CoursesPage from "./pages/Courses/CoursesPage.jsx";
import CourseDetails from "./components/Course/CourseDetails.jsx";

import CreateUser from "./components/User/CreateUser.jsx";
import CreateCourse from "./components/Course/AddCourse.jsx";
import SingleUser from "./components/User/SingleUser.jsx";
import { ToastContainer } from "react-toastify";
import UpdateUser from "./components/User/UpdateUser.jsx";
import UpdateCourse from "./components/Course/UpdateCourse.jsx";

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
      {shouldShowHeader && <Header isLoggedIn={user?.isLoggedIn} isAdmin={user?.isAdmin} name={user?.name} />}
      <div style={{ marginTop: shouldShowHeader ? "6rem" : "0" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/** --------------------- Auth Routes ---------------------  */}
          <Route path="/login" element={<Login />} />

          {/** --------------------- User Routes ---------------------  */}
          <Route path="/users" element={<User />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/update/:userId" element={<UpdateUser />} />
          <Route path="/users/:userId" element={<SingleUser />} />

          {/** --------------------- Course Routes ---------------------  */}
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/courses/update/:courseId" element={<UpdateCourse />} />
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
