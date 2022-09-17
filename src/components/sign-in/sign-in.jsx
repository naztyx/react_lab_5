import React from 'react';
import './sign-in.css'

const SignIn = () => (
    <div className='sign-in'>
        <h1>Have an account already?</h1>
        <h3>Sign-in here!</h3>

        <form>
            <label for="email">E-mail</label>
            <input name="email" type="email"></input>
            <label for="password">Password</label>
            <input name="password" type="password" />            
            <label for="text">Project Name</label>
            <input name="text" type="text"></input>

            <button>Sign In</button>
        </form>
        <p>Don't have account? Sign Up!</p>
    </div>
)

export default SignIn;
