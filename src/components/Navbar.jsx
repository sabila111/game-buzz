import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);


    const toggleTheme = () => {
        setIsDarkMode((pre) => !pre);
        const newTheme = !isDarkMode ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    const handleSignOut = () => {
        LogOut()
            .then()
            .catch()
    }

    const links = <>

        <li > <NavLink to={'/'}> Home</NavLink></li>
        <li > <NavLink to={'/allReview'}>All Reviews</NavLink></li>
        <li > <NavLink to={'/addReview'}>Add Reviews</NavLink></li>
        <li > <NavLink to={'/myReview'}>My Review</NavLink></li>
        <li > <NavLink to={'/game'}>Game WatchList</NavLink></li>


    </>

    return (
        <div className="navbar bg-white dark:bg-gray-800 p-4 text-black dark:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-orange-500 text-white font-semibold rounded-box w-40">
                        {links}
                    </ul>
                </div>
                <a className=" flex justify-center items-center normal-case font-bold text-lg md:text-3xl lg:text-3xl">
                    <img className="h-20 w-20" src={'https://i.ibb.co.com/59PBBgH/r.jpg'} alt="" />

                    Game<span className="text-2xl md:text-4xl lg:text-4xl text-orange-600"> Buzz</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" active mx-5  flex justify-center items-center gap-6 px-1 menu-horizontal font-medium text-lg ">
                    <style>
                        {`
  .menu-horizontal li:hover {
    background-color:  rgb(234 88 12);
    padding:10px;
    border-radius:5px;
    color: white;
    
  }
`}
                    </style>

                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className="flex items-center gap-1 md:gap-4 lg:gap-4">
                            {user.photoURL
                                && (
                                    <>
                                        <img
                                            onClick={handleSignOut}
                                            src={user.photoURL}
                                            alt="" className="w-14 h-14 rounded-full"
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={user.email} />
                                        <Tooltip id="my-tooltip" place="top" />
                                    </>
                                )}

                            <button
                                onClick={toggleTheme}
                                className="px-2 py-2 rounded-3xl bg-black text-white dark:bg-gray-700 dark:text-gray-300"
                            >
                                
                                {isDarkMode ? <CiLight className="text-2xl" /> : <MdOutlineDarkMode className="text-2xl"/>}
                            </button>

                            

                        </div>
                        :
                        <div className='flex items-center gap-4'>
                            <Link to={'/login'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-orange-400 to-orange-600  ">Login</button>
                            </Link>
                            <Link to={'/register'}>
                                <button className="py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-orange-400 to-orange-600">Register</button>
                            </Link>
                        </div>
                }


            </div>
        </div>
    );
};

export default Navbar;