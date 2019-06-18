import React, { Component } from 'react';
import './footer.scss'

class Footer extends Component {
    render(){
        return (
            <section id="footer">
                <a href="http://github.com"className="github">GitHub</a>
                <a href="http://linkedin.com"className="linkedin">LinkedIn</a>
                <a href="http://instagram.com"className="instagram">Instagram</a>
            </section>
        )
    }
}

export default Footer