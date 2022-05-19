import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useQuery } from "react-query";
import Loading from "../Loading";
import HeaderNavbar from "./HeaderNavbar";
import Task from "./Task";

const AllTask = () => {
  const {
    isLoading,
    data: tasks,
    refetch,
  } = useQuery("task", () =>
    fetch("https://tranquil-shelf-88822.herokuapp.com/task").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <HeaderNavbar></HeaderNavbar>
      <div className="px-3">
        <h3 className="text-primary text-center mt-5 mb-3">All Task</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task, index) => (
              <Task
                key={task._id}
                refetch={refetch}
                task={task}
                index={index}
              ></Task>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllTask;
