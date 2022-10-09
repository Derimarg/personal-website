import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { urls } from '../constants/constantsDB';

import classes from '../styles/Contact.module.css';
import Section from './Section';

import Subtitle from './Subtitle';

const Contact = () => {
  const submitHandler = () => {
    e.preventDefault();
  };

  return (
    <section id='contact'>
      <Section top={80} bottom={80}>
        <Row>
          <Col lg='6' md='6'>
            <Subtitle subtitle='Contact me' />
            <h3 className='mt-4 mb-4'>Contact with me</h3>
            <p>
              ✍️ Want to get in touch or have any further questions? Let me know
              what&apos;s on your mind by sending me an email or scheduling a
              video call.
            </p>
            <p>Thanks for visiting my website! - Derimar.</p>
            <div className='mt-5'>
              <button className='primary__btn'>
                <Link target='_blank' href={urls.book_meeting}>
                  Book a meeting
                </Link>
              </button>
            </div>
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
              <p className='mb-0'>
                By submitting this form, I acknowledge receipt.
              </p>
              <p className='mt-0'>
                Fields marked with an asterisk (*) are required.
              </p>
              <button className='primary__btn' type='submit'>
                Send
              </button>
            </form>
          </Col>
        </Row>
      </Section>
    </section>
  );
};

export default Contact;
