import React, { Component } from 'react';
import './conocimientos.scss';
import {NavLink} from 'react-router-dom';

class Conocimientos extends Component {
    render(){
        return (
                <nav id="wrapper-2">
                    <div className="conocimientos"> 
                        <h2>Conocimientos</h2>
                        <p>Me han enseñado muchas cosas; aqui están algunas de las que he aprendido</p>
                    </div>
                    <div className="icon-1"> 
                        <i className="devicon-html5-plain-wordmark" id="html">
                        </i>  
                    </div>
                    <div className="icon-2">
                        <i className="devicon-css3-plain-wordmark" id="css">
                        </i> 
                    </div>
                    <div className="icon-3"> 
                        <i className="devicon-javascript-plain" id="js">
                        </i>  
                    </div>
                    <div className="icon-4">
                        <i className="devicon-sass-original" id="sass"/>
                    </div>
                    <div className="icon-5"> 
                        <i className="devicon-react-original-wordmark" id="react">
                        </i>
                    </div>
                    <div className="icon-6">
                        <i className="devicon-angularjs-plain" id="angular">
                        </i>
                    </div>
                    <div className="icon-7"> 
                        <i className="devicon-express-original-wordmark" id="ex">
                        </i>     
                    </div>
                    <div className="icon-8">
                        <i className="devicon-git-plain" id="git">
                        </i>
                    </div>
                    <div className="icon-9"> 
                        <i className="devicon-nodejs-plain" id="node">
                        </i>

                    </div>
                    <div className="icon-10">
                        <i className="devicon-mongodb-plain-wordmark" id="mongo">
                        </i>
                    </div>
                    <div className="home">
                        <NavLink to="">    
                        <h2>Home</h2>
                        </NavLink> 
                    </div>
                    <div className="contacto">
                        <NavLink to="/contacto">
                            <h2>Contacto</h2>
                        </NavLink>
                    </div>
                </nav>   
        );
    }
}

export default Conocimientos;