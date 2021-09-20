import React from 'react'

const signIn = () => {
    return (
        <div>
            <div class="content-logo center text-center">
                <h3>Welcome!</h3><br />
                <p>Let's help you width new skills</p>
            </div>
            <div class="title">
                <form class="text-center" action="">
                    <input type="text" placeholder="Enter your full name" required />
                    <input type="email" placeholder="Enter you Email" required />
                    <input type="password" placeholder="Enter password" required />
                    <input type="password" placeholder="Confirm password" required />

                    <div class="center mt-2">
                        <button type="submit" class="text-white btn-primary center text-center"><strong>Get Started</strong></button>
                    </div>
                </form>
            </div>

            <p class="text-center mt-2">
                Already have an account ?
                <a href="#" class="text-blue"><strong>Sign In</strong></a>
            </p>
        </div>
    )
}

export default signIn
