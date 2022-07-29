import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { IdCard } from "../../icons/IdCard";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #003699;
`;

const NavbarContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 25px;
`;

const NavbarLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  margin-left: 1720px;
`;

const NavbarLinkItem = styled.div`
  :hover {
    opacity: 0.7;
  }
  cursor: pointer;
  display: flex;
  transition: 0.5s;
`;

export const Navbar = ({ title }) => {
  return (
    <NavbarContainer className="navbar bg-primary">
      <NavbarContentContainer>
        <IdCard />
        {title}
      </NavbarContentContainer>
      <NavbarLinksList>
        <NavbarLinkItem>
          <Link to="/">Home</Link>
        </NavbarLinkItem>
        <NavbarLinkItem>
          <Link to="/about">About</Link>
        </NavbarLinkItem>
      </NavbarLinksList>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
};
