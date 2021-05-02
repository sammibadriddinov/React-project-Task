import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearInterval(timeout);
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
