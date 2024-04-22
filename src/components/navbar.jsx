import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";                      // outlet to persist a component // link is like an anchor tag
import { Fragment } from "react";
// import { ReactComponent as LogoX } from '../assets/logox.svg';
import logoTOP from '../assets/logo-top.png';
import { FiHome } from "react-icons/fi";
import Home from "./home";

const SubNavBar = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(x => x);
    return (
        <div className="h-12 w-full flex justify-start items-center px-11">

            <span key={Home} className="text-gray-500 font-semibold"> 
            <Link to={'/'} className="text-gray-500"><FiHome className="mr-1" /></Link>   
            </span>
            <span className="mx-2"> {'>'} </span>

            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (<div>
                    <span key={name} className="text-blue-700 font-semibold ">{name}</span>
                </div>) : (
                    <React.Fragment key={name}>
                        <Link to={routeTo} className="text-gray-500">{name}</Link>
                        <span className="mx-2"> {'>'} </span>
                    </React.Fragment>
                );
            })}
        </div>
    );
};

const NavBar = () => {

    return (
        <Fragment>
            <div className="h-16 w-full flex justify-between mb-6 px-9">
                <Link className="flex items-center" to='/'>
                    <img src={logoTOP} alt="Hi-jacks" className="h-12" />
                </Link>
                <div className="flex items-center">
                    <Link className="px-3 py-1" to='/'>Home</Link>
                    <Link className="px-3 py-1" to='/flashcard'>Flashcard</Link>
                    <Link className="px-3 py-1" to='/'>Contact</Link>
                    <Link className="px-3 py-1" to='/'>FAQ</Link>
                    <Link className="px-5 py-1 rounded-full bg-gradient-to-t from-blue-700 to-blue-950 text-white" to='/'>Login</Link>
                </div>
            </div>
            <SubNavBar />
            <Outlet />
        </Fragment>
    )
};

export default NavBar;