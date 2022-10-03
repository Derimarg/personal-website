import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import classes from '../styles/Contact.module.css';
import Subtitle from './Subtitle';

const Contact = () => {
  const submitHandler = () => {
    e.preventDefault();
  };

  return (
    <section id='contact' className={classes.contact}>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <Subtitle subtitle='Contact me' />
            <h3 className='mt-4 mb-4'>Contact with me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae ratione iusto cum. Doloremque suscipit eius provident error
              labore est reprehenderit, exercitationem corrupti earum deleniti!
            </p>
          </Col>
          <Col lg='6' mg='6'>
            <form className={classes.form} onSubmit={submitHandler}>
              <div>
                <label>Full Name</label>
                <input
                  className={classes.form__group}
                  type='text'
                  placeholder='Steve Vidal'
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  className={classes.form__group}
                  type='email'
                  placeholder='stevevidal@email.com'
                  required
                />
              </div>
              <div>
                <label>Anything to ask?</label>
                <textarea
                  className={classes.form__group}
                  type='text'
                  rows={5}
                  placeholder='How can I help you?'
                  required
                />
              </div>
              <p>By submitting this form, I acknowledge receipt.</p>
              <p>Fields marked with an asterisk (*) are required.</p>
              <button className='primary__btn' type='submit'>
                Send
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
