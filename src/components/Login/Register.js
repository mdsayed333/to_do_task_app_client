import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
  const [passError, setPassError] = useState("");
//   const [createUserWithEmailAndPassword, user, loading, error] =
//     useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

//   if (loading) {
//     // return <Loadding></Loadding>;
//   }
//   if (user) {
//     navigate("/");
//   }

//   let registerErr;
//   if (error) {
//     registerErr = <p className="text-danger">{error.message}</p>;
//   }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
    //   createUserWithEmailAndPassword(email, password);
    } else {
      setPassError(<p className="text-danger">Confirm Password not matched</p>);
    }
  };
    return (
        <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
        <div className=" p-3">
          <h2 className="title">Create account</h2>
          <Form onSubmit={handleSubmit} className="my-3">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            {passError}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="confirmPassword">
                Confirm Password
              </Form.Label>
              <Form.Control
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>
            <button
              className="w-50 d-block mx-auto mb-2 "
              type="submit"
            >
              Register
            </button>
            {/* {registerErr} */}
          </Form>
          <p>
            Already have an account?{" "}
            <Link className="" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className=" mx-auto">
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
    );
};

export default Register;