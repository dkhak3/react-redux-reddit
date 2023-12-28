import React from "react";
import PropTypes from "prop-types";

const Textarea = ({
  name = "",
  id = "",
  placeholder = "",
  value = "",
  setValue,
  className = "input-about",
  cols = "30",
  rows = "10",
}) => {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      className={className}
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
  cols: PropTypes.string,
  rows: PropTypes.string,
  setValue: PropTypes.any,
};

export default Textarea;
