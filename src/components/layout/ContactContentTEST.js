import React from 'react';
import * as emailjs from 'emailjs-com';

import { Form, Col, Button } from 'react-bootstrap';

const initialFormData = Object.freeze({
    username: "",
    email: "",
    subject: "",
    message: ""
  });


export const ContactForm = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an Error.', err))
    }

    const handleChange = (e) => {
        updateFormData({
          ...formData,

          [e.target.name]: e.target.value.trim()
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for your message. Your query has been forwarded.`);
        const templateId = 'template_95qae99';
        const serviceID = "service_d1gtf6k";
        sendFeedback(serviceID, templateId, { from_name: formData.name, subject: formData.subject, message: formData.message, email: formData.email })

        console.log(formData);
      };

    return (

        <Form>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name*</Form.Label>
                <Form.Control onChange= {handleChange} name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control onChange= {handleChange} name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMobile">
                <Form.Label>subject</Form.Label>
                <Form.Control onChange= {handleChange} name="subject" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Query*</Form.Label>
                <Form.Control onChange= {handleChange} name="message" as="textarea" rows={3} />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
                </Button>
        </Form >

    )
}

export default ContactForm;