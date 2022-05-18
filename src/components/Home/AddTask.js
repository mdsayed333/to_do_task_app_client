import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddTask = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const task = {
        name: name,
        description: description
    }
    console.log(task);

    fetch('http://localhost:5000/task', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        toast.success('Successfully Added')
    });


  };


  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <h4 className="text-primary">Add a Task</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Enter description"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Form>
        <div className="text-center">
            <Link to='/alltask' className=" btn btn-outline-primary w-50">See All Task</Link>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
