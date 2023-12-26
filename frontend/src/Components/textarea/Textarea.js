import React from "react";
import PropTypes from "prop-types";

const Textarea = ({
  name = "",
  id = "",
  placeholder = "",
  value = "",
  setValue,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      cols="30"
      rows="10"
      className="input-about"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {value}
    </textarea>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.any,
};

export default Textarea;
