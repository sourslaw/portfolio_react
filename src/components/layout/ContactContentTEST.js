import React from 'react';
import * as emailjs from 'emailjs-com';


import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        name: props.name,
        email: props.email,
        subject: props.subject,
        message: props.message
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: '/*ME*/',
      subject,
      message_html: message,
    };
    emailjs.send(
      'gmail',
      'template_95qae99',
       templateParams,
      'user_SmSyrcsejJHD82DRXhyNr'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message, sentMessage } = this.state;

    return (
      <Form>
      <Row>
        <Col >
          <Form.Control type="text" className="mt-3 mb-3" placeholder="full name" onChange={this.handleChange} value={this.state.name}/>
          <Form.Control className="mb-3" placeholder="email address" value={this.email} onChange={this.state.handleChange} />
          <Form.Control type="text" placeholder="subject" value={this.subject} onChange={this.state.handleChange} />
        </Col>
        <Col>
          <Form.Control
            type="text"
            className="mb-3"

            as="textarea"
            placeholder="message"
            style={{ height: '180px', width: '400px' }}
            value={this.state.message}
            onChange={this.handleChange}
          />
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
}

export default ContactForm;