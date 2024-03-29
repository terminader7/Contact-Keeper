import React from "react";
import styled from "styled-components";
import { ContactForm } from "../contacts/ContactForm";
import { ContactFilter } from "../contacts/ContactFilter";
import { Contacts } from "../contacts/Contacts";

const HomepageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

export const Home = () => {
  return (
    <HomepageContainer>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </HomepageContainer>
  );
};
