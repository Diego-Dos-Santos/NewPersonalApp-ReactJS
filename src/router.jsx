import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Conocimientos from './Conocimientos/conocimientos';
import Contacto from './Contacto/contacto';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Home from './App';

function Layout (props) {
    return (
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div> 
    );
}

function Router () {
    return (  
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/conocimientos" component={Conocimientos} exact/>
                    <Route path="/contacto" component={Contacto} exact/>
                    <Route path="/home" component={Home} exact/>
                    <Route path="/" component={Home} exact/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default Router;