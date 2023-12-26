import React from "react";
import PropTypes from "prop-types";

const Input = ({
  name = "",
  id = "",
  value = "",
  setValue,
  type = "text",
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.any,
};

export default Input;
