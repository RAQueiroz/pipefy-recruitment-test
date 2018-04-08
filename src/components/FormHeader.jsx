import React from "react";

const FormHeader = ({ publicFormSettings }) => (
  <div>
    <h3 style={{ color: "#058bff" }}>{publicFormSettings.organizationName}</h3>
    <p style={{ color: "2f465c", fontWeight: "bold" }}>
      {publicFormSettings.title}
    </p>
  </div>
);

export default FormHeader;
