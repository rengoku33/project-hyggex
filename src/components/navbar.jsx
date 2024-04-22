import React from "react";
import { Outlet, Link } from "react-router-dom";                      // outlet to persist a component // link is like an anchor tag
import { Fragment } from "react";
import { ReactComponent as LogoX } from '../assets/logox.svg'

const NavBar = () => {

    return (
        <Fragment>
            <div className="h-16 w-full flex justify-between mb-6 text-lg">
                <Link className="pl-7 flex items-center" to='/'>
                    <LogoX className="h-12 w-12" />
                </Link>
                <div className="flex items-center pr-7">
                    <Link className="px-3 py-1" to='/'>Home</Link>
                    <Link className="px-3 py-1" to='/flashcard'>Flashcard</Link>
                    <Link className="px-3 py-1" to='/'>Contact</Link>
                    <Link className="px-3 py-1" to='/'>FAQ</Link>
                    <Link className="px-5 py-1 rounded-full bg-gradient-to-t from-blue-500 to-blue-900 text-white" to='/'>Login</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
};

export default NavBar;