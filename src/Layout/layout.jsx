import React, { Component } from 'react';
import './layout.scss'
import {NavLink} from 'react-router-dom';

class Layout extends Component {
    render(){
        return (
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
        );
    }
}

export default Layout;