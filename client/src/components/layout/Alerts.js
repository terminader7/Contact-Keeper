import React, { useContext } from "react";
import styled from "styled-components";
import { alertContext } from "../../context/alert/alertContext";

import { InfoCircle } from "../../icons/InfoCircle";

const AlertMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.7rem;
  margin: 1rem 0;
  opacity: 0.9;
  color: #fff;
  gap: 10px;
`;

export const Alerts = () => {
  const { alerts } = useContext(alertContext);

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertMessageContainer
        key={alert.id}
        className={`alert alert-${alert.type}`}
      >
        <InfoCircle /> {alert.msg}
      </AlertMessageContainer>
    ))
  );
};
