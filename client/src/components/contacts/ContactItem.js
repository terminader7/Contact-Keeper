import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { contactContext } from "../../context/contact/contactContext";

import { OpenEnvelope } from "../../icons/OpenEnvelope";
import { Phone } from "../../icons/Phone";

const ContactItemContainer = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
`;

const ContactCard = styled.h3`
  text-align: left;
  color: #003699;
`;

const ContactInfoList = styled.ul``;

const ContactInfoLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const ContactButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const ContactEditButton = styled.div`
  :hover {
    opacity: 0.8;
  }
  display: flex;
  border: 2px;
  border-radius: 2px;
  background-color: #36454f;
  color: white;
  padding-inline: 15px;
  cursor: pointer;
  transition: 0.5s;
`;

const ContactDeleteButton = styled.div`
  :hover {
    opacity: 0.8;
  }
  display: flex;
  border: 2px;
  border-radius: 2px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
  padding-inline: 15px;
  transition: 0.5s;
`;

export const ContactItem = ({ contact }) => {
  const contactsContext = useContext(contactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactsContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <ContactItemContainer>
      <ContactCard>
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </ContactCard>
      <ContactInfoList>
        <ContactInfoLine>
          {email && (
            <li>
              <OpenEnvelope />
            </li>
          )}{" "}
          {email}
        </ContactInfoLine>
        <ContactInfoLine>
          {phone && (
            <li>
              <Phone />
            </li>
          )}{" "}
          {phone}
        </ContactInfoLine>
      </ContactInfoList>
      <ContactButtonsContainer>
        <ContactEditButton onClick={() => setCurrent(contact)}>
          Edit
        </ContactEditButton>
        <ContactDeleteButton onClick={onDelete}>Delete</ContactDeleteButton>
      </ContactButtonsContainer>
    </ContactItemContainer>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
