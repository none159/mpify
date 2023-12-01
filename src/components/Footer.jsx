import React, { Component } from 'react'
import { Link } from "react-router-dom";
import github from '../icons/github.png'
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer style={{ marginTop: this.props.height != "" ? this.props.height : "130vh" }}>
                <div className='footer-container'>
                    <div className='about'>
                        <h2>About :</h2>
                        <h3>A dev that's create random stuff and small <br></br> project and this project one of those.</h3>
                    </div>
                    <div className='footer-links'>
                        <Link to="/mpify"><a>Home</a></Link>
                        <Link to="faq"><a>FAQ</a></Link>
                        <Link to="contact"><a>Contact</a></Link>
                    </div>
                    <div className='otherspro'>
                        <h2>Other Projects :</h2>
                        <a href="https://github.com/none159?tab=repositories" target='_noblank'><img src={github}></img></a>
                    </div>
                </div>
            </footer>

        );
    }
}
export default Footer;