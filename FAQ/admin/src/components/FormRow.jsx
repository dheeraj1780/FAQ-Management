import React from "react";

const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  placeholder,
  className,
}) => {
  return (
    <div className={`form-row ${className || ""}`}>
      <label htmlFor={name} className="form-group">
        {labelText || name}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        className="form-input"
        defaultValue={defaultValue}
        placeholder={placeholder || ""}
        required
      />
    </div>
  );
};

export default FormRow;
