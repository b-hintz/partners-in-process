import React from 'react';
import ContactForm from './ContactForm'
import emailjs from 'emailjs-com';
import ModalPopup from './ModalPopup'

class Contact extends React.Component {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        subject: '',
        questions: '',
        showModal: false,
        header: '',
        body: ''
    }

       handleChange = (e) => {
           this.setState({[e.target.name]: e.target.value});
       }

       handleSubmit = (e) => {
           e.preventDefault();

           if (this.state.email === '' || this.state.firstName === '' || this.state.lastName === '' || this.state.subject === '' || this.state.questions === '') {
               return (
                   this.setState({
                        showModal: true,
                        header: 'Sorry',
                        body: 'Please fill out all fields before sending your message'
                    }) 
               )  
           }
            let templateParams = {
                subject: this.state.subject,
                first: this.state.firstName,
                last: this.state.lastName,
                email: this.state.email,
                message: this.state.questions
            }

             emailjs.send(
                'brandenhintz@gmail.com',
                'template_kpqfkbg',
                templateParams,
                "user_b4v49w17Ibu59oBa9RR2q"
             )

            this.setState({
                email: '', 
                firstName: '', 
                lastName: '', 
                subject: '', 
                questions: '', 
                showModal: true, 
                header: 'Thank You!', 
                body:'Your message has been sent. We will get back to you as soon as possible.'});
        }

        handleClose =()=>{
            this.setState({
                showModal: false
            })
        }


   render() {
       return (
            <div className='text-center p-5' >
                <div>
                    <div className = "alert-info mx-auto my-3 alert">
                        <h4>Have questions?</h4>
                        <p>Fill out the form below. We'll get back to you ASAP!</p>
                    </div>
                    <div>
                        <ContactForm
                            changeHandler = {this.handleChange}
                            handleButton = {this.handleSubmit}
                            value1 = {this.state.email}
                            value2 = {this.state.firstName}
                            value3 = {this.state.lastName}
                            value4 = {this.state.subject}
                            value5 = {this.state.questions} 
                        />
                        <ModalPopup 
                            show={this.state.showModal} 
                            handleClose={this.handleClose} 
                            header={this.state.header} 
                            body = {this.state.body}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;