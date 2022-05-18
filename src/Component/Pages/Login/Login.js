import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                {errors.email?.type === ' pattern' && <span class="label-text text-red-500">{errors.email.message}</span>}
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

                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Login;