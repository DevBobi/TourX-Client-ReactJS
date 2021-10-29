import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logo from '../../../assets/userIcon.png';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';

const Login = () => {
    const { googleSignIn, setUser, setIsLoading, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            }).finally(() => setIsLoading(false))
            .catch(error => {

            })
    }

    return (
        <div className="login-area my-5 border p-5">
            {
                error && <div className="alert alert-danger m-3" role="alert">
                    {error}
                </div>
            }

            <form className="form text-center border-dark">
                <div className="text-center p-3">
                    <img width="100px" src={logo} alt="" />
                </div>
                <h2>Please Sign In</h2>

                <div className="text-center py-2">
                    <button onClick={handleGoogleSignIn} className="m-0 g-btn"><FcGoogle /> SignIn Using Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;