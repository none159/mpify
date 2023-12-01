import React, { Component } from 'react'
import MHero from './MHero';
import Navbar from './Navbar';
import Footer from './Footer';

class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Navbar />
                <MHero />
                <Footer />

            </>
        )
    }
}
export default Home;