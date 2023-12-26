import React from "react";
import PropTypes from "prop-types";

const Label = ({ valueName, children }) => {
  return <label htmlFor={valueName}>{children}</label>;
};

Label.propTypes = {
  valueName: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
export default Label;
