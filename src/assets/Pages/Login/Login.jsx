/* eslint-disable react/no-unescaped-entities */
// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
// import google from '../../images/google.jpg'
// // import fb1 from '../../images/a.jpg'

// // import { AuthContext } from '../../providers/AuthProvider';
// import { AuthContext } from '../../Provider/AuthProvider';

// const Login = () => {
//     const { signIn, signInWithGoogle } = useContext(AuthContext);
//     const [showPassword, setShowPassword] = useState(false);
//     const navigate = useNavigate()

//     const handleLogin = event => {
//         event.preventDefault();

//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         console.log(email, password);

//         signIn(email, password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 form.reset();
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.log('Error:', error);
//             });
//     };

//     const handleGoogleSignIn = event => {
//         signInWithGoogle()
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.log('Error:', error);
//             });
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className="hero min-h-screen  rounded-md">
//             <div className="hero-content flex-col min-w-full rounded-md">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-3xl font-bold text-green-600">Login</h1>
//                 </div>
//                 <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
//                     <div className="card-body box-shadow-carousel ">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" name="email" placeholder="email" className="input input-bordered border border-green-400" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>

//                             <div className="relative">
//                                 <input
//                                     type={showPassword ? 'text' : 'password'}
//                                     name="password"
//                                     placeholder="password"
//                                     className="input input-bordered w-full border border-green-400"
//                                 />
//                                 <span className="absolute inset-y-0 pr-3 right-0 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
//                                     {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
//                                 </span>
//                             </div>

//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover p-1 text-sky-600 font-semibold">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control">
//                             <button className="font-semibold details py-2 md:py-2 rounded-md text-white border-2 border-green-400">Login</button>
//                         </div>
//                         <div className='mx-auto mt-3'><span>Haven not any account yet? </span><Link to="/register" className='text-blue-500'>Register</Link></div>
//                         <div className="form-control mt-6">
//                             <button onClick={handleGoogleSignIn} className="bg-white border-2  py-1 rounded-md border-green-400 ">
//                                 <img className=' rounded-md w-1/12 mx-auto' src={google} alt="Photo 4" />
//                             </button>
//                         </div>
//                         {/* <div className="form-control mt-1">
//                             <button onClick={handleGoogleSignIn} className="bg-white border-2  py-1 rounded-md border-blue-400 ">
//                                 <img className=' rounded-md w-1/12 mx-auto' src={fb1} alt="Photo 4" />
//                             </button>
//                         </div> */}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;



// // const Login = () => {

// //     const { loginUser, signInWithGoogle } = useContext(AuthContext);
// //     const [showPassword, setShowPassword] = useState(false);
// //     const navigate = useNavigate()


// //     //     event.preventDefault();

// //     //     const form = event.target;
// //     //     const email = form.email.value;
// //     //     const password = form.password.value;

// //     //     console.log(email, password);

// //     //     signIn(email, password)
// //     //         .then(result => {
// //     //             const loggedUser = result.user;
// //     //             console.log(loggedUser);
// //     //             form.reset();
// //     //             navigate('/');
// //     //         })
// //     //         .catch(error => {
// //     //             console.log('Error:', error);
// //     //         });
// //     // };
// //     const handleLogin = event => {
// //         event.preventDefault();
// //         const form = event.target;
// //         const email = form.email.value;
// //         const password = form.password.value;

// //         console.log(email, password);

// //         loginUser(email, password)
// //             .then(result => {
// //                 const loggedUser = result.user;
// //                 console.log(loggedUser);
// //                 form.reset();
// //                 navigate('/');
// //             })
// //             .catch(error => {
// //                 console.error('Error:', error);
// //             });
// //     };


// //     const handleGoogleSignIn = event => {
// //         signInWithGoogle()
// //             .then(result => {
// //                 const loggedUser = result.user;
// //                 console.log(loggedUser);
// //                 navigate('/');
// //             })
// //             .catch(error => {
// //                 console.log('Error:', error);
// //             });
// //     };

// //     const togglePasswordVisibility = () => {
// //         setShowPassword(!showPassword);
// //     };

// //     return (
// //         <div className="hero min-h-screen  rounded-md">
// //             <div className="hero-content flex-col min-w-full rounded-md">
// //                 <div className="text-center lg:text-left">
// //                     <h1 className="text-3xl font-bold text-green-600">Login</h1>
// //                 </div>
// //                 <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
// //                     <div className="card-body box-shadow-carousel ">
// //                         <div className="form-control">
// //                             <label className="label">
// //                                 <span className="label-text">Email</span>
// //                             </label>
// //                             <input type="email" name="email" placeholder="email" className="input input-bordered border border-green-400" />
// //                         </div>
// //                         <div className="form-control">
// //                             <label className="label">
// //                                 <span className="label-text">Password</span>
// //                             </label>

// //                             <div className="relative">
// //                                 <input
// //                                     type={showPassword ? 'text' : 'password'}
// //                                     name="password"
// //                                     placeholder="password"
// //                                     className="input input-bordered w-full border border-green-400"
// //                                 />
// //                                 <span className="absolute inset-y-0 pr-3 right-0 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
// //                                     {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
// //                                 </span>
// //                             </div>

// //                             <label className="label">
// //                                 <a href="#" className="label-text-alt link link-hover p-1 text-sky-600 font-semibold">Forgot password?</a>
// //                             </label>
// //                         </div>
// //                         <div className="form-control">
// //                             <button className="font-semibold details py-2 md:py-2 rounded-md border-2 border-green-400 text-red-500">Login</button>
// //                         </div>
// //                         <div className='mx-auto mt-3'><span>Haven not any account yet? </span><Link to="/register" className='text-blue-500'>Register</Link></div>
// //                         <div className="form-control mt-6">
// //                             <button onClick={handleGoogleSignIn} className="bg-white border-2  py-1 rounded-md border-green-400 ">
// //                                 <img className=' rounded-md w-1/12 mx-auto' src={google} alt="Photo 4" />
// //                             </button>
// //                         </div>
// //                         <div className="form-control mt-1">
// //                             <button onClick={handleGoogleSignIn} className="bg-white border-2  py-1 rounded-md border-blue-400 ">
// //                                 {/* <img className=' rounded-md w-1/12 mx-auto' src={fb1} alt="Photo 4" /> */}
// //                                 FB
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import google from '../../images/google.jpg';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleGoogleSignIn = event => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log('Error:', error);
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="hero min-h-screen  rounded-md">
            <div className="hero-content flex-col min-w-full rounded-md">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold text-green-600">Login</h1>
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body box-shadow-carousel ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered border border-green-400" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full border border-green-400"
                                />
                                <span className="absolute inset-y-0 pr-3 right-0 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                                    {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover p-1 text-sky-600 font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="font-semibold details py-2 md:py-2 rounded-md text-white border-2 border-green-400">Login</button>
                        </div>
                        <div className='mx-auto mt-3'><span>Haven't any account yet? </span><Link to="/register" className='text-blue-500'>Register</Link></div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogleSignIn} className="bg-white border-2  py-1 rounded-md border-green-400 ">
                                <img className=' rounded-md w-1/12 mx-auto' src={google} alt="Photo 4" />
                            </button>
                        </div>
                        {/* <div className="form-control mt-1">
                            <button onClick={handleGoogleSignIn} className="bg-white border-2  py-1 rounded-md border-blue-400 ">
                                <img className=' rounded-md w-1/12 mx-auto' src={fb1} alt="Photo 4" />
                            </button>
                        </div> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

