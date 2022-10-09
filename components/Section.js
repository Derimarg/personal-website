import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Section = (props) => {
  return (
    <Container>
      <Row>
        <Col lg='12'>
          <div className='section__top' style={{paddingTop: props.top, paddingBottom: props.bottom}}>{props.children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
