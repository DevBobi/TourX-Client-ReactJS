import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logo from '../../../assets/userIcon.png';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';

const Login = () => {
    const { googleSignIn, setUser, setIsLoading, error, user } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const uri = location.state?.from || '/serviceDetails';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(uri);
                setUser(result.user);
            }).finally(() => setIsLoading(false))
            .catch(error => {

            })
    }

    return (
        <div className="login-area my-5 ">
            {
                error && <div className="alert alert-danger m-3" role="alert">
                    {error}
                </div>
            }
            <div className="text-center p-3">
                <img width="100px" src={logo} alt="" />
            </div>
            <form className="form text-center border-dark">
                <h2>Please Sign In</h2>
                <input type="email" placeholder="Email" required /><br /><br />
                <input type="password" placeholder="Password" required /><br /><br />
                <button className="btn btn-danger w-100">Sign In</button>
                <div className="pt-3 link">
                    <Link to="/signup">Don't have an account?</Link>
                </div>
                <p>--------------- or -------------</p>
                <div className="text-center py-2">
                    <button onClick={handleGoogleSignIn} className="m-0 g-btn"><FcGoogle /> SignIn Using Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;