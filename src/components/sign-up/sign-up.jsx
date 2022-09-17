import React from 'react';
import './sign-up.css'; //import css

const SignUp = () => (
    <div className="sign-up">
        <h1>Don't have an account?</h1>
        <h3>Sign up here!</h3>

        <form>
            <label for="text">Name</label>
            <input name="text" type="text"></input>
            <label for="email">E-mail</label>
            <input name="email" type="email"></input>
            <label for="password">Password</label>
            <input name="password" type="password" />

            <label for="optiions">User Type</label>
            <select id="oprions">
                <option value="Developer">Dev</option>
                <option value="Owner">Owner</option>
            </select>

            <button>Sign Up</button>
        </form>
    </div>
)

export default SignUp;
