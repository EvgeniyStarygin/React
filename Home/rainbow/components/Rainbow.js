import React from "react";
import PropTypes from "prop-types";

import "./Rainbow.css";

class Rainbow extends React.Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return (
      this.props.colors.reduce((acc, color) => (<div style={{ padding: "20px", border: `5px solid ${color}` }}>{acc}</div>), (<div style={{ textAlign: "center" }}>{this.props.children}</div>))
    );
  }
}

export default Rainbow;
