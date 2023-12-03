import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            dark: true
        }
    }
    setbackground() {
        this.setState({ dark: !this.state.dark })
        document.documentElement.style.setProperty('background-color', this.state.dark ? 'white' : '#242424');
        document.documentElement.style.setProperty('color', this.state.dark ? 'black' : 'white');
        document.documentElement.style.setProperty('--color-uses', this.state.dark ? '#24242483' : 'rgba(255, 255, 255, 0.592)');

    }
    componentDidMount() {
        this.setbackground()
    }
    render() {
        return (
            <nav>
                <div className="nav-container">
                    <div className="logo-container">
                        <h2><span>MP</span>IFY</h2>
                    </div>
                    <div className="links-container">
                        <Link to="/mpify"><a>Home</a></Link>
                        <Link to="/faq"><a>FAQ</a></Link>
                        <Link to="/contact"><a>Contact</a></Link>
                        <div className="appearance">
                            <i className="fa fa-moon-o" aria-hidden="true" style={{ color: this.state.dark ? 'white' : '#242424' }}></i><label className="switch">
                                <input type="checkbox" onClick={() => this.setbackground()} />
                                <div className="slider round"></div>
                            </label></div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;