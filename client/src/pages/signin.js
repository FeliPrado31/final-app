import React, { useState } from 'react'
import { auth,firebase_app } from "../data/config";

import { withRouter } from "react-router";

import {Link} from 'react-router-dom'

const SignIn = ({ history }) => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')


    const signInAuth = async () => {
        if (email.length < 5 || password.length < 5 || name.length < 5) return
        else if (password !== repeatPassword) return


        try {
            let credentials = await auth.createUserWithEmailAndPassword(email, password);
            await firebase_app.firestore().collection('users').doc(credentials.user.uid).set({
                "id": credentials.user.uid,
                "avatar": 'https://firebasestorage.googleapis.com/v0/b/final-proyect-71f51.appspot.com/o/jett-avatar.jpg?alt=media&token=f810830c-cd12-4a3d-b307-5238101c302f',
                "name": name,
                "email": email
            })
            history.push(`${process.env.PUBLIC_URL}/dashboard`);

        } catch (error) {
            console.error(error);


        }
    }


    return (
        <div>
            <div className="content-logo center text-center">
                <h3>Welcome!</h3><br />
                <p>Let's help you width new skills</p>
            </div>
            <div className="title">
                <form className="text-center" action="">
                    <input type="text" placeholder="Enter your nickname" required value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Enter you Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm password" required value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />

                    <div className="center mt-2">
                        <span type="submit" onClick={signInAuth} className="text-white btn-primary center text-center"><strong>Get Started</strong></span>
                    </div>
                </form>
            </div>

            <p className="text-center mt-2">
                Already have an account ?
                <Link to="/login" className="text-blue"><strong>Sign In</strong></Link>
            </p>
        </div>
    )
}

export default withRouter(SignIn)
