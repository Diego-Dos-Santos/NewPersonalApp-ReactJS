import React, { Component } from 'react';
import './layout.scss'
import {NavLink} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

class Layout extends Component {
    render(){
        return (
            <ScrollAnimation animateIn="fadeIn" duration="3">
                <nav id="wrapper">
                    <div className="sobremi">     
                        <h2>SOBRE MI</h2>
                        <p>
                            Comenzando en el area de Full Stack Developer, con ganas de hacerlo bien
                            y aprender mucho junto a mis compañeros de trabajo.
                            Mi afición ahora es la programación, y aqui
                            podrás ver mi potencial.
                        </p> 
                    </div>
                    <div className="conocimientos" title="Conocimientos">
                            <NavLink to="/conocimientos">
                                <p>CONOCIMIENTOS</p>
                                <img src="./icons/brain.png" alt="conocimientos"/>
                            </NavLink>
                    </div>
                    <div className="contacto" title="Contacto">
                            <NavLink to="/contacto">
                                <p>CONTACTO</p>
                                <img src="./icons/email.png" alt="contactos"/>
                            </NavLink>
                    </div>
                </nav>
            </ScrollAnimation>
        );
    }
}

export default Layout;