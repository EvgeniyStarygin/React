import React from "react";
import PropTypes from "prop-types";

import "./ProductEditNewCard.css";
import ValidationMessage from "./ValidationMessage";

class ProductEditNewCard extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      photo: PropTypes.string,
      itemsLeft: PropTypes.number,
      code: PropTypes.number,
    }),
    cardHeader: PropTypes.string.isRequired,
    cbDisableActions: PropTypes.func.isRequired,
    cbSaveChanges: PropTypes.func.isRequired,
    cbCancel: PropTypes.func.isRequired,
    cbAddProduct: PropTypes.func,
    mode: PropTypes.string.isRequired,
    formInvalid: PropTypes.bool,
  };

  state = {
    productName: this.props.product.name || "",
    productPrice: this.props.product.price || "",
    productQuantity: this.props.product.itemsLeft || "",
    productNameValidationMessage: "",
    productPriceValidationMessage: "",
    productQuantityValidationMessage: "",
    formInvalid: this.props.formInvalid,
  };

  changeName = (eo) => {
    this.setState({
      productName: eo.target.value,
    }, this.validateAll)
    this.props.cbDisableActions();
  };

  changePrice = (eo) => {
    this.setState({
      productPrice: eo.target.value,
    }, this.validateAll);
    this.props.cbDisableActions();
  };

  changeQuantity = (eo) => {
    this.setState({
      productQuantity: eo.target.value,
    }, this.validateAll);
    this.props.cbDisableActions();
  };

  cancel = (eo) => {
    this.props.cbCancel();
  };

  saveChanges = (eo) => {
    this.props.cbSaveChanges(this.props.product.code, this.state.productName, +this.state.productPrice, +this.state.productQuantity);
  };

  addProduct = (eo) => {
    let newProduct = {
      "name": this.state.productName,
      "price": +this.state.productPrice,
      "itemsLeft": +this.state.productQuantity,
    }
    this.props.cbAddProduct(newProduct);
  };


  validateAll = () => {
    let nameMessage = "";
    let priceMessage = "";
    let quantityMessage = "";
    if (!this.state.productName) {
      nameMessage = "Поле не может быть пустым";
    }
    if (!this.state.productPrice) {
      priceMessage = "Поле не может быть пустым";
    } else if (+this.state.productPrice < 0) {
      priceMessage = "Поле не может содержать отрицательные значения";
    }
    if (!this.state.productQuantity) {
      quantityMessage = "Поле не может быть пустым";
    } else if (+this.state.productQuantity < 0) {
      quantityMessage = "Поле не может содержать отрицательные значения";
    }
    this.setState({ productNameValidationMessage: nameMessage }, this.checkValidationMessages);
    this.setState({ productPriceValidationMessage: priceMessage }, this.checkValidationMessages);
    this.setState({ productQuantityValidationMessage: quantityMessage }, this.checkValidationMessages);
  }

  checkValidationMessages = () => {
    if (!!(this.state.productNameValidationMessage || this.state.productPriceValidationMessage || this.state.productQuantityValidationMessage)) {
      this.setState({ formInvalid: true });
    } else {
      this.setState({ formInvalid: false });
    }
  }

  render() {
    return (
      <div className="NewEditProduct">
        <h3>{this.props.cardHeader}</h3>
        <div className="NewEditValue">
          <span>Name: </span>
          <input
            type="text"
            value={this.state.productName}
            onChange={this.changeName} />
          <ValidationMessage
            text={this.state.productNameValidationMessage} />
        </div>
        <div className="NewEditValue">
          <span>Price: </span>
          <input type="text" value={this.state.productPrice} onChange={this.changePrice} />
          <ValidationMessage
            text={this.state.productPriceValidationMessage} />
        </div>
        <div className="NewEditValue">
          <span>Quantity: </span>
          <input type="number" value={this.state.productQuantity} onChange={this.changeQuantity} />
          <ValidationMessage
            text={this.state.productQuantityValidationMessage} />
        </div>
        <div>
          {
            this.props.mode === "edit" && <input type="button" value="Save" onClick={this.saveChanges} disabled={this.state.formInvalid} />
          }
          {
            this.props.mode === "new" && <input type="button" value="Add" onClick={this.addProduct} disabled={this.state.formInvalid} />
          }
          <input type="button" value="Cancel" onClick={this.cancel} />
        </div>
      </div>
    );
  }
}


export default ProductEditNewCard;
