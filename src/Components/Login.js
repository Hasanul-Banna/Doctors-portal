import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../App';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import GoggleFbLogin from './GoggleFbLogin';
import LoginBg from '../images/login.png';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(res => {
                const newUserInfo = { ...loggedInUser }
                newUserInfo.name = res.user.displayName;
                setloggedInUser(newUserInfo);
                history.replace(from);
                // console.log('alhamdulillah');
            })
            .catch(error => {
                const newUserInfo = { ...loggedInUser }
                newUserInfo.error = error.message;
                setloggedInUser(newUserInfo);
            });
    };



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <br /> <br />
                            <h1 className="text-center">Log In</h1> <br />

                            <input className="form-control" name="email" type="email" ref={register({ required: true })} placeholder="Email" />
                            {errors.email && <small className="text-danger">This field is required</small>} <br />

                            <input className="form-control" name="password" type="password" ref={register({ required: true })} placeholder="Password" />
                            {errors.password && <small className="text-danger">This field is required</small>} <br />

                            <input className="btn btn-main w-100" type="submit" value="Sign In" />
                            <Link to="/SignUp"><small>Don't have an account?</small></Link>
                            <p className="text-danger">{loggedInUser.error}</p>
                            <p id="or">Or</p>
                            <GoggleFbLogin />
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={LoginBg} alt="" className="w-100"/>
                </div>
            </div>
        </div>

    )

};

export default Login;