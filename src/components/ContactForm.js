import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = (props) => (
    <div className = "row p-5 form">
        <Form>
            <div className = "row">
                <Form.Group controlId="exampleForm.ControlEmail" className = "field">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name = "email" placeholder="name@example.com" value={props.value1} onChange={props.changeHandler} />
                </Form.Group>
            </div>
            <div className = "row">
                <Form.Group controlId="formGridFirstName" className = "field">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name = "firstName" placeholder="First Name" value={props.value2} onChange={props.changeHandler} />
                </Form.Group>
            </div>
            <div className = "row">
                <Form.Group controlId="formGridLastName" className = "field">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name = "lastName" placeholder="Last Name" value={props.value3} onChange={props.changeHandler} />
                </Form.Group>
            </div>
            <div className = "row">
            <div className = "message">
            <Form.Row>
                <Form.Group controlId="formGridSubject" className = "field">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name = "subject" placeholder="Subject" value={props.value4} onChange={props.changeHandler} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group controlId="exampleForm.ControlQuestions">
                    <textarea type="text" className = "textarea" name = "questions" placeholder="Message" value={props.value5} onChange={props.changeHandler} />
                </Form.Group>
            </Form.Row>   
            <Form.Row> 
                <Button variant="secondary" onClick={props.handleButton} >Send</Button>
            </Form.Row>
            </div>
            </div>
        </Form>
    </div>
)

export default ContactForm;