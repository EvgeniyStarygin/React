import React from "react";
import PropTypes from "prop-types";

import "./ValidationMessage.css";

class ValidationMessage extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <span className="ValidationMessage">{this.props.text}</span>
    )
  }
}

export default ValidationMessage;
