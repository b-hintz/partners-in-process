import React from 'react';
import ContactForm from './ContactForm'
import emailjs from 'emailjs';

class Contact extends React.Component {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        subject: '',
        questions: '',
        questionsList: []
    }

       //change handlers
       handleChange1 = (event) => {
           this.setState({email: event.target.value});
       }
       handleChange2 = (event) => {
           this.setState({firstName: event.target.value});
       }
       handleChange3 = (event) => {
          this.setState({lastName: event.target.value});
       }
        handleChange4 = (event) => {
            this.setState({subject: event.target.value});
        }
        handleChange5 = (event) => {
            this.setState({questions: event.target.value});
        }


       handleSubmit = (event) => {
           event.preventDefault();
            console.log(this.state.email)
            console.log(this.state.firstName)
            console.log(this.state.lastName)
            console.log(this.state.subject)
            console.log(this.state.questions)

            let templateParams = {
              from_name: this.state.email,
              to_name: 'brandenhintz@gmail.com',
              subject: this.state.subject,
              message_html: this.state.questions,
             }

             emailjs.send(
              'brandenhintz@gmail.com',
              'template_fxGRnH08',
               templateParams,
              'user_Mp6zicNymLe3YFHHnxnk8'
             )

            this.setState({email: '', firstName: '', lastName: '', subject: '', questions: ''});

       }


   render() {
       return (
       
                <div className='text-center p-5' >
                    <h4 className='mb-5'>Contact Us</h4>
                        <div>
                            <div className = "alert-danger mx-auto my-3 alert">
                                <h4>Have questions?</h4>
                                <p>  Fill out the form below! We'll get back to you ASAP! </p>
                            </div>


                              <ContactForm
                                  changeHandler1 = {this.handleChange1}
                                  changeHandler2 = {this.handleChange2}
                                  changeHandler3 = {this.handleChange3}
                                  changeHandler4 = {this.handleChange4}
                                  changeHandler5 = {this.handleChange5}
                                  handleButton = {this.handleSubmit}
                                  value1 = {this.state.email}
                                  value2 = {this.state.firstName}
                                  value3 = {this.state.lastName}
                                  value4 = {this.state.subject}
                                  value5 = {this.state.questions}

                              />
                          </div>
                      </div>
              );
    }
}

export default Contact;