import React, { Fragment, useContext } from "react";
import { ContactItem } from "./ContactItem";
import { contactContext } from "../../context/contact/contactContext";

export const Contacts = () => {
  const { contacts } = useContext(contactContext);

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};
