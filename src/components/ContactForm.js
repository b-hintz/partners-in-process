import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = (props) => (
    <div className = "row p-5 form">
        <Form>
            <div className = "row">
                <Form.Group controlId="exampleForm.ControlEmail" className = "field">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={props.value1} onChange={props.changeHandler1}/>
                </Form.Group>
            </div>
            <div className = "row">
                <Form.Group controlId="formGridFirstName" className = "field">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" value={props.value2} onChange={props.changeHandler2}/>
                </Form.Group>
            </div>
            <div className = "row">
                <Form.Group controlId="formGridLastName" className = "field">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={props.value3} onChange={props.changeHandler3}/>
                </Form.Group>
            </div>
            <div className = "row">
            <div className = "message">
            <Form.Row>
                <Form.Group controlId="formGridSubject" className = "field">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" value={props.value4} onChange={props.changeHandler4} />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group controlId="exampleForm.ControlQuestions">
                    <textarea className="textarea" type="text" placeholder="Message" value={props.value5} onChange={props.changeHandler5}/>
                </Form.Group>
            </Form.Row>   
            <Form.Row> 
                <Button variant="primary" onClick={props.handleButton} >Send</Button>
            </Form.Row>
            </div>
            </div>
        </Form>
    </div>
)

export default ContactForm;