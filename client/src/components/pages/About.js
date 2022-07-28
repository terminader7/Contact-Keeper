import React from "react";
import styled from "styled-components";

const AboutPageContainer = styled.div``;

export const About = () => {
  return (
    <AboutPageContainer>
      <h1>About This App</h1>
      <p className="my-1">
        This is a full stack React app for keeping contacts
      </p>
      <p className="bg-dark p">
        <strong>Version:</strong> 1.0.0
      </p>
    </AboutPageContainer>
  );
};
