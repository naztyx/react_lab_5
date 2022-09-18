import React from 'react';
import './sign-up.css'; //import css 
import site_contents from '../../static/forms_input';//import form content

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
        name:yup.string().required().min(6),
        email:yup.string().required(),
        password:yup.string().required(),
    });

const SignUp = () => {

    const { register, handleSubmit, formState:{ errors } } = useForm(
        {resolver: yupResolver(schema)}
    );
    
    const onSubmit = (data) => console.log(data);

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

            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default SignUp;
