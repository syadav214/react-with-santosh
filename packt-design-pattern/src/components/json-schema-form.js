import React from "react";
import Form from "react-jsonschema-form";

const schema = {
  type: "object",
  properties: {
    firstName: { type: "string", default: "San" },
    lastName: { type: "string", default: "Y" },
  },
};

const JSONSchemaForm = () => {
  const handleSubmit = ({ formData }) => {
    console.log(formData);
  };

  return <Form schema={schema} onSubmit={handleSubmit} />;
};

export default JSONSchemaForm;
