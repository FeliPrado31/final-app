import React, {useState} from 'react'
import { withRouter } from "react-router";

import logo from '../assets/images/logo.png'
import  {firebase_app } from "../data/config";

import {Link} from 'react-router-dom'


function Login({history}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginAuth = async () => {
        if (email.length < 5 || password.length < 5) return
        try {
            await firebase_app.auth().signInWithEmailAndPassword(email, password);
            history.push(`${process.env.PUBLIC_URL}/dashboard`);

        } catch (error) {
            console.error(error);

          
        }
    }



    return (
        <>
            <div className="content-logo center text-center">
                <h3 className="mb-2">Welcome back!</h3>
                <img className="logo-login" src={logo} alt="logo" />
            </div>
            <div className="title">
                <form className="text-center" action="" method="POST">
                    <input type="imail" name="email" id="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="mb-1" type="password" name="password" id="password" placeholder="Enter password" value={password}  onChange={(e) => setPassword(e.target.value)} required />
                    {/* <span className="text-blue">Forgot password</span> */}

                    <div className="center mt-2">
                        <span onClick={loginAuth} className="text-white btn-primary center text-center"><strong>Login</strong></span>
                    </div>
                </form>
            </div>

            <p className="text-center mt-1">
                Don't have an account ?
                <Link to="/register" className="text-blue"><strong>Sign Up</strong></Link>
            </p>
        </>
    )
}

export default withRouter(Login)
