import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';

import profileImg from '../public/images/profile.png';

import classes from '../styles/Hero.module.css';
import Subtitle from './Subtitle';
import { urls } from '../constants/constantsDB';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className={classes.hero__content}>
              <Subtitle subtitle='Hello' />
              <h3 className='mt-4 mb-3'>I&apos;m Derimar Gray</h3>
              <p>
                I spend most of time coding. I love sharing knowledge and learn,
                my goal is to help other developers!
              </p>
              <div className='mt-5'>
                <button className='primary__btn'>
                  <Link href={urls.resume}>Download Resume</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className={`${classes.hero__img} text-end`}>
              <Image
                alt='hero image'
                src={profileImg}
                width='400'
                height='400'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
