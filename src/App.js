import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import DashboardTasks from "./Pages/DashboardTasks";
import DashboardMessages from './Pages/DashboardMessages';


function App() {

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
// Thank you !!!

  return (
    <>
      {/* <Link to="/">Home Page</Link>
      <Link to="/contact">Contact Page</Link>
      <Link to="/about">About Page</Link>
      <Link to="/login">Login Page</Link> */}

      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/contact">Contact Page</NavLink>
      <NavLink to="/about"  style={({ isActive }) =>
              isActive ? {fontSize:"20px",fontWeight:"bold"} : undefined
            }>About Page</NavLink>
      <NavLink to="/login">Login Page</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/dashboard/tasks">tasks</NavLink>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about"  element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
        <Route
          path=""
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      </Routes>
      <footer>This is footer</footer>
    </>
  );
}

export default App;
