import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

class Faq extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <Navbar />
                <section className='faq-section'>
                    <div className='faq-container'>
                        <div>
                            <h2>Is this site secure?</h2>
                            <h3>Yes , the website is totally secure , you can check the source code in <a href="https://github.com/none159?tab=repositories">github</a>.</h3></div>
                        <div>
                            <h2>What's the difference between this website and others ?</h2>
                            <h3>This website is add free so feel free to use it anytime without any trouble. </h3></div>
                        <div>
                            <h2>how much do I need to pay?</h2>
                            <h3>the site is totally free , don't let anyone to scam you.</h3></div>
                    </div>
                </section>
                <Footer height="70vh" />
            </>
        );
    }
}
export default Faq;