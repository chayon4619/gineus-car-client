import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handelSignup = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col gap-20 lg:flex-row">
                    <div className="text-center w-1/2  lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card  w-1/2  shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">SignUp!</h1>
                        <form onSubmit={handelSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="btn btn-error text-white" />
                            </div>
                            <div className='text-center'>
                                <p className='label-text-alt'>Have account ? <Link to="/login" className="label-text-alt link link-hover">Login</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;