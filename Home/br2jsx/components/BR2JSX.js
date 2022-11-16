import React from "react";
import PropTypes from "prop-types";

import "./BR2JSX.css";

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const regex = /<br?.?.>/g;
    const words = this.props.text.split(regex);
    let arr = [];
    words.forEach((word, index) => {
      (index) && arr.push(<br key={index} />);
      arr.push(word);
    });

    return (
      <div style={{ backgroundColor: "green", width: "100px", color: "white", textAlign: "center" }}>
        {arr}
      </div>
    );
  }
}

export default BR2JSX;
