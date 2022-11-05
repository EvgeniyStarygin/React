import React from "react";
import PropTypes from "prop-types";

import "./Product.css";

class Product extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    photo: PropTypes.string,
    itemsLeft: PropTypes.number,
    code: PropTypes.number,
    cbProductSelected: PropTypes.func,
    isSelected: PropTypes.bool,
    cbDeleteProduct: PropTypes.func,
    cbEditProduct: PropTypes.func,
    productInEditMode: PropTypes.bool,
  };

  productClicked = (eo) => {
    if (!this.props.productInEditMode)
      this.props.cbProductSelected(this.props.code);
  };

  deleteProduct = (eo) => {
    eo.stopPropagation();
    if (confirm("Вы действительно хотите удалить товар - " + this.props.name))
      this.props.cbDeleteProduct(this.props.code);
  };

  editProduct = (eo) => {
    eo.stopPropagation();
    this.props.cbEditProduct(this.props.code);
  };

  render() {
    return (
      <tr
        className={this.props.isSelected ? "Orange" : ""}
        onClick={this.productClicked}
      >
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>
          <img src={this.props.photo} />
        </td>
        <td>{this.props.itemsLeft}</td>
        <td>
          <input
            type="button"
            value="Edit"
            onClick={this.editProduct}
            disabled={this.props.productInEditMode}
          />
          <input
            type="button"
            value="Delete"
            onClick={this.deleteProduct}
            disabled={this.props.productInEditMode}
          />
        </td>
      </tr>
    );
  }
}

export default Product;
