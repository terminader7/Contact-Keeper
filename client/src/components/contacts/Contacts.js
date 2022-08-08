import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ContactItem } from "./ContactItem";
import { contactContext } from "../../context/contact/contactContext";
import { Spinner } from "../layout/Spinner";

export const Contacts = () => {
  const { contacts, filtered, getContacts, loading } = useContext(
    contactContext
  );

  useEffect(() => {
    getContacts();
    //eslin-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  //checking to see if there's anything in filtered, we will map through and show the filtered items, if filtered is empty, then we show the contacts
  return (
    <>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={1000}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={1000}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </>
  );
};
