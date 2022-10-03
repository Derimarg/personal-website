import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
  IoCodeOutline,
  IoDesktopOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';

import classes from '../styles/Services.module.css';
import Subtitle from './Subtitle';

const ServicesItem = ({ title, icon }) => {
  return (
    <div className={classes.service__item}>
      <span className='icons'>{icon()}</span>
      <div>{title}</div>
    </div>
  );
};

const Services = () => {
  return (
    <section id='services'>
      <Container>
        <Row>
          <Col lang='6' md='6'>
            <div className={classes.services__container}>
              <div>
                <ServicesItem
                  title='App Development'
                  icon={() => <IoPhonePortraitOutline size='3rem' />}
                />
                <ServicesItem
                  title='Web Development'
                  icon={() => <IoDesktopOutline size='3rem' />}
                />
              </div>
              <ServicesItem
                title='Full Stack Development'
                icon={() => <IoCodeOutline size='3rem' />}
              />
            </div>
          </Col>
          <Col lg='6' md='6' className={classes.service__title}>
            <Subtitle subtitle='What I do' />
            <h3 className='mb-0 mt-4'>Better Design,</h3>
            <h3 className='mb-4'>Better Experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
              culpa nobis corporis officiis, numquam cupiditate, enim expedita
              eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
              Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
              Veniam, non distinctio dolorem rerum laboriosam deleniti.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
