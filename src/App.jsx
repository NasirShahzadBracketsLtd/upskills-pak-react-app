import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import User from "./pages/User/User.jsx";
import CoursesPage from "./pages/Courses/CoursesPage.jsx";
import CourseDetails from "./components/Course/CourseDetails.jsx";
import { API_BASE_URL } from "./utils/constants.js";

import axios from "axios";

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    isAdmin: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const fetchUserRole = async () => {
        try {
          const roleResponse = await axios.get(`${API_BASE_URL}/users/user/role`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if ((roleResponse.status = 200)) {
            const role = roleResponse.data.role;

            setUser({ isLoggedIn: true, isAdmin: role == "ADMIN" });
            setHasCheckedLogin(true); // Set hasCheckedLogin to true
          }
        } catch (error) {
          console.log("Error while getting user role", error);
        }
      };

      fetchUserRole();
    }
  }, []);

  const location = useLocation(); // Get the current location
  const hideHeaderPaths = ["/login"]; // Paths where the header should be hidden

  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div
      style={{
        overflow: "auto", // Allows scrolling
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // Internet Explorer and Edge
      }}
    >
      {shouldShowHeader && <Header isLoggedIn={user.isLoggedIn} isAdmin={user.isAdmin} />}
      <div style={{ marginTop: shouldShowHeader ? "6rem" : "0" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<User />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
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

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Header/Header.jsx";
// import Home from "./pages/Home/Home.jsx";
// import Login from "./pages/Login/Login.jsx";
// import User from "./pages/User/User.jsx";
// import CoursesPage from "./pages/Courses/CoursesPage.jsx";
// import CourseDetails from "./components/Course/CourseDetails.jsx";

// function App() {
//   return (
//     <div
//       style={{
//         overflow: "auto", // Allows scrolling
//         scrollbarWidth: "none", // Firefox
//         msOverflowStyle: "none", // Internet Explorer and Edge
//       }}
//     >
//       {<Header />}
//       <div style={{ marginTop: "6rem" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/users" element={<User />} />
//           <Route path="/courses" element={<CoursesPage />} />
//           <Route path="/courses/:courseId" element={<CourseDetails />} />
//           {/* <Route path="/my-learnings" element={<MyLearnings />} /> */}
//         </Routes>
//       </div>
//     </div>
//   );
// }

// function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default AppWrapper;
