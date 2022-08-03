import React, { useContext, useRef, useEffect } from "react";
import { contactContext } from "../../context/contact/contactContext";

export const ContactFilter = () => {
  const { clearFilter, filterContacts, filtered } = useContext(contactContext);
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, [clearFilter, filterContacts, filtered]);

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};
