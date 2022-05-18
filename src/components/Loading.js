import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Spinner animation="grow" variant="dark" className='d-block'/>
        </div>
    );
};

export default Loading;