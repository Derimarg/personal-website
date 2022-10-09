import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import classes from '../styles/Footer.module.css';
import Link from 'next/link';
import { nav__links } from '../constants/constantsDB';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg='12'>
            <div className={`${classes.nav__menu} ${classes.footer__top}`}>
              {nav__links.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.label}
                </Link>
              ))}
            </div>
          </Col>

          <Col lg='12'>
            <div className={classes.footer__copyright}>
              <p>&copy; Copyright {year} - Derimar Gray</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
