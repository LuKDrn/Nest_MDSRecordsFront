import React, { FunctionComponent, useEffect, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.style.css';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar: FunctionComponent = () => {

    useEffect(() => {

    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <NavLink exact className="active nav-link text-white" activeClassName="text-info font-weight-bold" to='/'>
                        <li className="nav-item">Home</li>
                    </NavLink>
                    <NavLink exact className="active nav-link text-white" activeClassName="text-info font-weight-bold" to='/albums'>
                        <li className="nav-item">Albums</li>
                    </NavLink>
                    <NavLink exact className="active nav-link text-white" activeClassName="text-info font-weight-bold" to='/artists'>
                        <li className="nav-item">Artists</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
