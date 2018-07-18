import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import autosize from 'autosize';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';
import Mail from '../images/content/mail.svg';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.state = {
      name: '',
      email: '',
      message: '',
      success: '',
      error: '',
      pending: false,
    };
  }

  componentDidMount() {
    autosize(document.querySelectorAll('textarea'));
  }

  errorCheck() {
    // Perform error checking
    if (!this.state.name) {
      this.setState({
        error: 'Name must be populated.',
        pending: false,
      });
      return false;
    }

    if (!this.state.email) {
      this.setState({
        error: 'Email must be populated.',
        pending: false,
      });
      return false;
    }
    if (!this.state.message) {
      this.setState({
        error: 'Message must be populated.',
        pending: false,
      });
      return false;
    }
    this.setState({
      error: '',
      pending: true,
    });
    return true;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.errorCheck()) {
      axios.post('/api/contact', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      })
        .then((resp) => {
          if (resp.data.success) {
            this.setState({
              name: '',
              email: '',
              message: '',
              success: 'Message sent!',
              error: '',
              pending: false,
            });
          } else {
            this.setState({
              error: resp.data.error,
              success: '',
              pending: false,
            });
          }
        })
        .catch(() => {
          this.setState({
            error: 'Hmmm there was an error sending your message, reach us at adamripley@gmail.com',
            success: '',
            pending: false,
          });
        });
    }
  }

  render() {
    return (
      <div className="container contact" id="contact">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-xl-10 offset-xl-1 col-12">
            <Fade right>
              <div className="card contact-card">
                <form className="contact-form" onSubmit={this.handleSubmit}>
                  <div className="contact-title-wrap">
                    <img src={Mail} alt="mail" className="contact-icon" />
                    <h1 className="contact-title">
                      Reach out!
                    </h1>
                  </div>
                  <p>
                    I&apos;m always looking for exciting opportunities, new clients,
                     and interesting conversations.
                  </p>
                  <div className="line-break" />
                  <ErrorMessage error={this.state.error} />
                  <SuccessMessage message={this.state.success} />
                  <input onChange={this.handleChange} name="name" value={this.state.name} className="form-control name-field" placeholder="Name" />
                  <input onChange={this.handleChange} name="email" type="email" value={this.state.email} className="form-control email-field" placeholder="Email" />
                  <textarea onChange={this.handleChange} name="message" value={this.state.message} className="form-control message-field" placeholder="What are you looking for..." />
                  <input
                    className="btn contact-btn"
                    type="submit"
                    value={this.state.pending ? 'Sending...' : 'Send'}
                  />
                </form>
              </div>
            </Fade>
          </div>
        </div>
        <footer>
          <div className="container-fluid footer">
            <p className="footer-text">
              Adam Ripley &copy; 2018. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Contact;
