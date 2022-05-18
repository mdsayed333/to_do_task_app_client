import React from 'react';
import { toast } from 'react-toastify';

const Task = ({task, refetch, index}) => {
    const {name, description, _id} = task;

    const handleDelete = () => {
        const url = `http://localhost:5000/task/${_id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log();
                toast.error(`${name} is Deleted`);
                refetch();
            }
        });
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td><button onClick={handleDelete} className='btn btn-outline-danger btn-sm'>Delete</button></td>
          </tr>
    );
};

export default Task;