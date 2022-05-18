import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';


const Signup = () => {
    const naviigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        console.log(data);
    }
    if(user){
        naviigate('/')

    }
    if(loading || gLoading){
        return <Loading></Loading>
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        messade: "Name is Required"
                                    },
                                   


                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text text-red-500">{errors.name.message}</span>}
                                
                            </label>

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        messade: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[A-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        messade: "provide a valid email"
                                    }


                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text text-red-500">{errors.email.message}</span>}
                            </label>

                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Enter Your Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        messade: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        messade: "Must be 6 characters or longer"
                                    }


                                })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength ' && <span class="label-text text-red-500">{errors.password.message}</span>}
                            </label>

                        </div>

                        <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp" />
                    </form>
                    <p>Already have an Account? <Link className='text-primary' to="/login">Please Login</Link></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Signup;