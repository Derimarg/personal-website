import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';

import profileImg from '../public/images/profile.png';

import classes from '../styles/Hero.module.css';
import { urls } from '../constants/constantsDB';

const Hero = () => {
  return (
    <header className='masthead'>
      <div className='container px-4 px-lg-5 h-100'>
        <div className='row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center'>
          <div
            className={`col-lg-8 align-self-baseline mt-5 ${classes.team_member}`}
          >
            <Image
              src={profileImg}
              width={200}
              height={200}
              alt='Profile avatar'
            />
            <h3 className='mt-4 mb-3'>Derimar Gray</h3>
            <p className='text-white-75 mb-5'>
              I&apos;m a Full Stack Developer with a passion for developing web
              and mobile applications that positively impact people&apos;s
              lives. In addition to coding and learning new tech, I enjoy
              volunteering, drinking coffee, reading, working out, cycling,
              being a dog lover, and hanging out with friends. If any of these
              things interest you, I&apos;d love to chat!
            </p>

            <div className='mt-5'>
              <button className='primary__btn'>
                <Link href={urls.resume}>Download Resume</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
