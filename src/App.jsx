import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import "./index.css";
import Footer from "./components/Footer/Footer.jsx";
import ListOfAllUsers from "./components/User/ListOfAllUsers/ListOfAllUsers.jsx";
import CreateUser from "./components/User/CreateUser/CreateUser.jsx";
import { users } from "../data.js";

function App() {
  return (
    <div
      style={{
        overflow: "auto", // Allows scrolling
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // Internet Explorer and Edge
      }}
    >
      {/* <ListOfAllUsers users={users} /> */}
      {/* <CreateUser /> */}
      {/* <CreateCourse /> */}
      <Header />
      <Home />
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
