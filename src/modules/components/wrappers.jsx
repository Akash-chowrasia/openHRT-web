import styled from "styled-components";
import React from "react";

export const PageWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 16px;

  a {
    text-decoration: unset;
    color: dodgerblue;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 24px;
`;

export const AuthWrapper = styled(({ children, ...props }) => (
  <div {...props}>
    <div className="main">{children}</div>
  </div>
))`
  display: grid;
  place-items: center;
  .main {
    display: grid;
    place-items: center;
    width: 450px;
  }
`;
