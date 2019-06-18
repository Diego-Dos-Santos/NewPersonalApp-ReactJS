import React, { Component } from 'react';
import './navbar.scss';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
            <section id="navbar">
                <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
                    <NavLink to="" className="navbar-brand">
                        <span className="navbar-brand">DIEGOdosSANTOS</span> 
                    </NavLink>
                </nav>  
            </section>
        );
    }
}

export default Navbar