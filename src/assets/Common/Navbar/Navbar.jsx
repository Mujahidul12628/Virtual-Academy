import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"
import { AuthContext } from '../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import logo from '../../images/Virtual-Academy.png';
// import logo from '../../images/logo.png';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then()
            .catch(error => {
                console.error(error.message)
            })

    }

    return (
        <div className=''>
            <div className="w-full mx-auto shadow-lg bg-slate-100 navbar max-w-7xl font-julius">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/class">Class</NavLink></li>
                            {user && <><li><NavLink to="/instructor">Instructor</NavLink></li>
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li></>}
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                        </ul>
                    </div>

                    <div className='inline-flex items-center'>
                        <img src={logo} className='w-2/12' alt="" />
                        {/* <Link to="/" className="ml-4 text-xl normal-case">Virtual Academy</Link> */}
                    </div>

                </div>

                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/class">Class</NavLink></li>
                        {user && <><li><NavLink to="/instructor">Instructor</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li></>}
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    {user ?
                        <div className='inline-flex items-center gap-2'>

                            <label tabIndex={0} className=" avatar">
                                <div className="w-10 rounded-full ">
                                    <img
                                        src={user.photoURL || 'https://i.ibb.co/Qv83f2q/3177440.png'}
                                        className="w-10 h-10 rounded-full"
                                        alt=""
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user?.displayName}
                                    />
                                </div>
                            </label>

                            <Link to="/">

                                <button onClick={handleLogOut} className="px-3 py-2 font-semibold text-white rounded-full bg-cyan-500">Log out</button>

                            </Link>
                        </div>
                        :
                        <Link to="/login">

                            <button className="px-3 py-2 font-semibold text-white rounded-full bg-cyan-500">Login</button>

                        </Link>}
                </div>

            </div>
            <Tooltip id="my-tooltip" className='bg-[#65C3C8]' />

        </div>

    );
};

export default Navbar;
