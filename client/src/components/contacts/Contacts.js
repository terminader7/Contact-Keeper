import React, { Fragment, useContext } from "react";
import { ContactItem } from "./ContactItem";
import { contactContext } from "../../context/contact/contactContext";

export const Contacts = () => {
  const { contacts, filtered } = useContext(contactContext);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  //checking to see if there's anything in filtered, we will map through and show the filtered items, if filtered is empty, then we show the contacts
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};
