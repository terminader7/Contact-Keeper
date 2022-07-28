import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IdCard } from "../../icons/IdCard";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavbarContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 25px;
`;

export const Navbar = ({ title, icon }) => {
  return (
    <NavbarContainer className="navbar bg-primary">
      <NavbarContentContainer>
        <IdCard />
        {title}
      </NavbarContentContainer>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
};
