import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { authContext } from "../../context/auth/authContext";

import { IdCard } from "../../icons/IdCard";
import { Logout } from "../../icons/LogOut";

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

const NavbarItemsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  margin-left: 1600px;
`;

const NavbarLinkItem = styled.div`
  :hover {
    opacity: 0.7;
  }
  cursor: pointer;
  display: flex;
  transition: 0.5s;
  align-items: center;
`;

const NavbarGreetingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLogoutContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Navbar = ({ title }) => {
  const { isAuthenticated, logout, user } = useContext(authContext);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <NavbarGreetingContainer>
        Hello {user && user.name}
      </NavbarGreetingContainer>
      <a onClick={onLogout} href="#!">
        <NavbarLogoutContainer>
          <Logout />
          <span className="hide-sm">Logout</span>
        </NavbarLogoutContainer>
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavbarLinkItem>
        <Link to="/register">Register</Link>
      </NavbarLinkItem>
      <NavbarLinkItem>
        <Link to="/login">Login</Link>
      </NavbarLinkItem>
    </Fragment>
  );

  return (
    <NavbarContainer className="navbar bg-primary">
      <NavbarContentContainer>
        <IdCard />
        {title}
      </NavbarContentContainer>
      <NavbarItemsList>
        {isAuthenticated ? authLinks : guestLinks}
      </NavbarItemsList>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
};
