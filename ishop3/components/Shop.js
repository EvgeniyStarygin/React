import React from "react";
import PropTypes from "prop-types";

import "./Shop.css";

import Product from "./Product";
import ProductInfoCard from "./ProductInfoCard";
import ProductEditNewCard from "./ProductEditNewCard";

import { Fragment } from "react/cjs/react.production.min";

class Shop extends React.Component {
  static propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        itemsLeft: PropTypes.number.isRequired,
        code: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    currProducts: this.props.items,
    selectedProductCode: null,
    productCardWorkMode: null,
    productInEditMode: false,
  };

  productSelected = (code) => {
    this.setState({
      selectedProductCode: code,
      productCardWorkMode: "info",
    });
  };

  deleteProduct = (code) => {
    let arr = this.state.currProducts.filter((item) => item.code != code);
    this.setState({ currProducts: arr });
    if (this.state.selectedProductCode === code) {
      this.setState({ selectedProductCode: null });
    }
  };

  editProduct = (code) => {
    this.setState({
      selectedProductCode: code,
      productCardWorkMode: "edit",
    });
  };

  disableActions = () => {
    this.setState({
      productInEditMode: true,
    });
  };

  saveChanges = (code, newName, newPrice, newQuantity) => {
    let newProducts = this.state.currProducts;
    let product = newProducts.find((item) => item.code === code);
    product.name = newName;
    product.price = newPrice;
    product.itemsLeft = newQuantity;
    this.setState({ currProducts: newProducts }, this.cancel);
  };

  cancel = () => {
    this.setState({ productInEditMode: false, productCardWorkMode: null, selectedProductCode: null });
  }

  addNewProduct = () => {
    this.setState({ selectedProductCode: null, productCardWorkMode: "new" });
  };

  saveNewProduct = (newProduct) => {
    let products = this.state.currProducts;
    newProduct.code = products.length + 1000;
    newProduct.photo = "Тут должна быть линка на картинку";
    products.push(newProduct);
    this.setState({ currProducts: products }, this.cancel);
  }

  render() {
    return (
      <Fragment>
        <div className="Shop">
          <table>
            <tbody>
              <tr className="Header">
                {this.props.headers.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
              {this.state.currProducts.map((item) => (
                <Product
                  key={item.code}
                  {...item}
                  cbProductSelected={this.productSelected}
                  cbDeleteProduct={this.deleteProduct}
                  cbEditProduct={this.editProduct}
                  isSelected={this.state.selectedProductCode == item.code}
                  productInEditMode={this.state.productInEditMode}
                />
              ))}
            </tbody>
          </table>
          <input
            type="button"
            value="New product"
            disabled={this.state.productInEditMode}
            onClick={this.addNewProduct}
          />
        </div>

        {this.state.selectedProductCode !== null && this.state.productCardWorkMode === "info" && (
          <ProductInfoCard
            product={this.props.items[this.state.selectedProductCode]}
          />
        )}
        {this.state.selectedProductCode !== null && this.state.productCardWorkMode === "edit" && (
          <ProductEditNewCard
            cardHeader="Edit existing Product"
            product={this.props.items[this.state.selectedProductCode]}
            cbDisableActions={this.disableActions}
            cbSaveChanges={this.saveChanges}
            key={this.state.selectedProductCode}
            mode={this.state.productCardWorkMode}
            cbCancel={this.cancel}
          />
        )}
        {this.state.productCardWorkMode === "new" && (
          <ProductEditNewCard
            cardHeader="Add new Product"
            product={{
              "name": undefined,
              "price": undefined,
              "itemsLeft": undefined,
            }}
            cbDisableActions={this.disableActions}
            cbSaveChanges={this.saveChanges}
            mode={this.state.productCardWorkMode}
            cbCancel={this.cancel}
            cbAddProduct={this.saveNewProduct}
            formInvalid={true}
          />
        )}
      </Fragment>
    );
  }
}

export default Shop;
