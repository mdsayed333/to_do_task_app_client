import React from "react";
import AddTask from "./AddTask";
import AllTask from "./AllTask";
import HeaderNavbar from "./HeaderNavbar";

const Home = () => {
  return (
    <div>
      <HeaderNavbar></HeaderNavbar>
      <AddTask></AddTask>
    </div>
  );
};

export default Home;
