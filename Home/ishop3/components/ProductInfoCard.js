import React from "react";
import PropTypes from "prop-types";

import "./ProductInfoCard.css";
import ValidationMessage from "./ValidationMessage";

class ProductInfoCard extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      itemsLeft: PropTypes.number.isRequired,
      code: PropTypes.number.isRequired,
    }).isRequired,
  };


  render() {
    return (
      <div className="ProductInfoCard">
        <h3>{this.props.product.name}</h3>
        <div>
          <span>Price: {this.props.product.price}</span>
        </div>
        <div>
          <span>
            Quantity: {this.props.product.itemsLeft}
          </span>
        </div>
        <div>
          <img src={this.props.product.photo} />
        </div>
      </div>
    );
  }
}


export default ProductInfoCard;
