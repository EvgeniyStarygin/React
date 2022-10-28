var Shop = React.createClass({
  displayName: "Shop",
  propTypes: {
    headers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        photo: React.PropTypes.string.isRequired,
        itemsLeft: React.PropTypes.number.isRequired,
        code: React.PropTypes.number.isRequired,
      })
    ),
  },

  getInitialState: function () {
    return {
      productsToShow: this.props.items,
      selectedProductCode: null,
    };
  },

  productSelected: function (code) {
    this.setState({ selectedProductCode: code });
  },

  deleteProduct: function (code) {
    this.setState({
      productsToShow: this.state.productsToShow.filter(
        (item) => item.code != code
      ),
    });
  },

  render: function () {
    return React.DOM.table(
      { className: "IShop", cellSpacing: 0 },
      React.DOM.tbody(
        null,
        React.DOM.tr(
          null,
          this.props.headers.map((item, index) =>
            React.DOM.th({ key: index }, item)
          )
        ),
        this.state.productsToShow.map((item) =>
          React.createElement(Product, {
            key: item.code,
            code: item.code,
            name: item.name,
            price: item.price,
            photo: item.photo,
            itemsLeft: item.itemsLeft,
            cbProductSelected: this.productSelected,
            isSelected: this.state.selectedProductCode == item.code,
            cbDeleteProduct: this.deleteProduct,
            isDeleted: this.state.deletedProductCode == item.code,
          })
        )
      )
    );
  },
});
