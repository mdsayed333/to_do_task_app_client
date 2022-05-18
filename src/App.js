import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddTask from "./components/Home/AddTask";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import RequireAuth from "./components/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllTask from "./components/Home/AllTask";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addTask"
          element={
            <RequireAuth>
              <AddTask></AddTask>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/alltask"
          element={
            <RequireAuth>
              <AllTask></AllTask>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
