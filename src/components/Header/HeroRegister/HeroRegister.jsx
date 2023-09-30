import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { Result } from "postcss";
import { useState } from "react";


const HeroRegister = () => {
 
    const [registerError,setRegisterError] = useState(' ')
    const [success,setSuccess] = useState("")


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
            // reset error
            setRegisterError('')
            setSuccess('')

            // create user
        createUserWithEmailAndPassword(auth,email,password)
        .then(Result =>{
            console.log(Result)
            setSuccess( 'User Created successfully');
        })
        .catch(error=>{
            // console.error(error);
            setRegisterError(error.message);
        } )
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                           <form onSubmit={handleRegister} >
                           <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary capitalize font-bold text-xl">Register</button>
                            </div>
                           </form>
                           {
                            registerError && <p className="text-red-700">{registerError}</p>
                           }
                           {
                            success && <p className="text-green-600">{success}</p>
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;