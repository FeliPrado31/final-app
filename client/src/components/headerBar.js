import React, { useEffect, useState } from 'react'
import './headerBar.css'

import { firebase_app } from '../data/config'

import Modal from 'react-modal';




const HeaderBar = () => {
    const [user, setUser] = useState(null)



    useEffect(() => {
        const getData = async () => {
            const user = await firebase_app.auth().currentUser;
            console.log(user);
            if (user) {
                firebase_app.firestore().collection('users').doc(user.uid).get().then((doc) => {
                    if (doc.exists) {
                        setUser(doc.data())
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }
        }
        getData()
    }, [])

    const logout = async () => {
        try {
            await firebase_app.auth().signOut()
        } catch (error) {
            console.error(error);
        }
    }



    console.log(user);

    return (
        <>
            <header className="header_bar">
                {
                    user && (
                        <div className="header__container">
                            <p className="header_title">{user.name}</p>
                            <img className="header_bar__img" src={user.avatar} />
                        </div>
                    )
                }

            </header>
            <span onClick={logout} className="header_logout text-blue" style={{marginRight:10}}>Logout</span>

        </>
    )
}

export default HeaderBar
