import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

//     const navigate = useNavigate();
//   const [resetWarning, setResetWarning] = useState("");
//   const [signInWithEmailAndPassword, user, loading, error] =
//     useSignInWithEmailAndPassword(auth);
//   const [sendPasswordResetEmail, sending, passResetError] =
//     useSendPasswordResetEmail(auth);
//   const [email, setEmail] = useState("");
//   const location = useLocation();

//   let from = location.state?.from?.pathname || "/";

//   if (loading) {
//     return <Loadding></Loadding>;
//   }

//   if (user) {
//     navigate(from, { replace: true });
//   }

//   let loginErr;
//   if (error) {
//     loginErr = <p className="text-danger">{error.message}</p>;
//   }

    const handleSubmit = async (event) => {
        
        event.preventDefault();
        const password = event.target.password.value;
    
        // signInWithEmailAndPassword(email, password);
      };
    return (
        <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 ">
          <div className="loginForm p-3">
            <h2 className="title">Please Login</h2>
            <Form onSubmit={handleSubmit} className="my-3">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                //   onBlur={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              {/* {resetWarning} */}
              <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <button
                className="w-50 d-block mx-auto mb-2 my-button"
                type="submit"
              >
                Login
              </button>
              {/* {loginErr} */}
            </Form>
            <div className="d-flex justify-content-between align-items-center">
              <p>
                <Link
                  to="/register"
                  role="button"
                  className="text-danger linkStyle"
                >
                  Create an account
                </Link>
              </p>
              
            </div>
          </div>
  
          <div>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    );
};

export default Login;