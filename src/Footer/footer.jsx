import React, { Component } from 'react';
import './footer.scss'

class Footer extends Component {
    render(){
        return (
            <section id="footer">
                <a href="https://github.com/Diego-Dos-Santos" target="_blank" rel="noopener noreferrer" className="github">GitHub</a>
                <a href="https://www.linkedin.com/in/diego-dos-santos-38973b17b/" target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</a>
                <a href="https://www.instagram.com/diegogarfieldjj" target="_blank" rel="noopener noreferrer"className="instagram">Instagram</a>
            </section>
        )
    }
}

export default Footer