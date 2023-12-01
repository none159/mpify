import React, { createRef, Component } from 'react'
import Nav from './Navbar';
import Footer from './Footer'
import emailjs from '@emailjs/browser'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: "",
            receiver: "",
            object: "",
            message: "",
            sent: false

        }
        this.form = createRef();



    }


    sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_3qhrvgf', 'template_i9qlmhl', this.form.current, 'o-3KENy3DCthjpB5Y')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                this.setState({ sent: true })
            }, (error) => {
                console.log(error.text);
            });
    };

    componentDidMount() {

        this.clearpopup = setTimeout(() => {
            this.setState({ sent: false })
        }, 3000);

    }

    render() {
        return (
            <>
                <Nav />
                <section className='contact-sec'>
                    <div className='contact-container'>
                        <h2 className='contacttitle'>Contact Form</h2>
                        <form ref={this.form} onSubmit={(e) => this.sendEmail(e)}>
                            <h2 htmlFor="from_name">Name :</h2>
                            <input name="from_name"></input>
                            <h2 htmlFor="from_email">Email :</h2>
                            <input name="from_email"></input>
                            <h2 htmlFor="message">Message :</h2>
                            <textarea name="message" id="message" aria-expanded="false"></textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </section>
                <Footer />
            </>
        );

    }
}

export default Contact;