import React from "react";
import { PageWrapper } from "../../components/wrappers";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Box = styled.div`
  color: pink;
`;

const Dashboard = () => {
  return (
    <PageWrapper>
      <h5>Health Tracker</h5>
      <Container>
        <Row>
          <Col>
            <Box />
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default Dashboard;
