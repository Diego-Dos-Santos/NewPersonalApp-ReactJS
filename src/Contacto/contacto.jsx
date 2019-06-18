import React, { Component } from 'react';
import './contacto.scss';
import {NavLink} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Contacto extends Component {
    render(){
        return (
            <ScrollAnimation animateIn="fadeIn" duration={1.4} animateOut="fadeOut">
                <section id="contacto5">
                <h2>CONTACTO</h2>
        
                <p className="desc">si te ha gustado mi trabajo, contactame</p>
                        <div className="iconsContainer">
                            <p className="numero">(34) 611071165</p>
                        </div>
                        <div className="iconsContainer">
                            <p className="email">diegodossantos.es@gmail.com</p>
                        </div>

                        <div className="home">
                        <NavLink to="">    
                        <h2>Home</h2>
                        </NavLink> 
                    </div>
                    <div className="conocimientos">
                        <NavLink to="/conocimientos">
                            <h2>Conocimientos</h2>
                        </NavLink>
                    </div>

                </section>
        </ScrollAnimation>
        );
    }
}

export default Contacto;
