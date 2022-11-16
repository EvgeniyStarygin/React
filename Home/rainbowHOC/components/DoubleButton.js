import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./DoubleButton.css";

class DoubleButton extends React.Component {
  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired
  };

  clickButton = (eo) => {
    this.props.cbPressed(eo.currentTarget.name);
  }

  render() {
    return (
      <Fragment>
        <input type="button" name="1" value={this.props.caption1} onClick={this.clickButton} />
        {this.props.children}
        <input type="button" name="2" value={this.props.caption2} onClick={this.clickButton} />
      </Fragment>
    );
  }
}

export default DoubleButton;
