import React from 'react';
import './sign-in.css'
import site_contents from '../../static/forms_input';


const SignIn = () => {

    return(
    <div className='sign-in'>
        <h1>Have an account already?</h1>
        <h3>Sign-in here!</h3>

        <form>
        {site_contents.inputs2.map((input,key) =>{
                return(
                    <div key={key}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <br></br>
                        <input type={input.type} name={input.name} />
                    </div>
                )
            })            
            }

            <button>Sign In</button>
        </form>
        <p>Don't have account? Sign Up!</p>
    </div>
    );
}

export default SignIn;
