import React from 'react';
import './sign-up.css'; //import css 
import site_contents from '../../static/forms_input';//import form content

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link } from 'react-router-dom';

const schema = yup.object({
        name:yup.string().required().min(6),
        email:yup.string().required('Please enter a valid email'),
        password:yup.string().required('Please enter a password').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
        )
    });

const SignUp = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm(
        {resolver: yupResolver(schema)}
    );
    
    const onSubmit = (values) => console.log(values);

    return(
    <div className="sign-up">
        <h1>Don't have an account?</h1>
        <h3>Sign up here!</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
            {site_contents.inputs1.map((input,key) =>{
                return(
                    <div key={key}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <br/>
                        {/*<input type={input.type} name={input.name} ref={register}/>*/}
                        <input {...register('name')}/> 
                        {errors.name && <p>{input.name} is required</p>}
                    </div>
                )
            })            
            }
            
            <label htmlFor="options">User Type</label>
            <select id="options">
                <option value="Developer">Dev</option>
                <option value="Owner">Owner</option>
            </select>

            <button>Sign Up</button>
        </form>
        <p>Have an account? <Link to='/signin'>Sign In!</Link></p>
        <p><Link to='/'>Back to Home</Link></p>
    </div>
    );
}

export default SignUp;
