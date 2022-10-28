var Product = React.createClass({
  displayName: "Product",
  propTypes: {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    photo: React.PropTypes.string.isRequired,
    itemsLeft: React.PropTypes.number.isRequired,
    code: React.PropTypes.number.isRequired,
    cbProductSelected: React.PropTypes.func.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
    cbDeleteProduct: React.PropTypes.func.isRequired,
  },

  productClicked: function (EO) {
    this.props.cbProductSelected(this.props.code);
  },

  deleteProduct: function (EO) {
    EO.stopPropagation();
    this.props.cbDeleteProduct(this.props.code);
  },

  render: function () {
    return React.DOM.tr(
      {
        className: this.props.isSelected ? "orange" : "",
        onClick: this.productClicked,
      },
      React.DOM.td(null, this.props.name),
      React.DOM.td(null, this.props.price),
      React.DOM.td(null, React.DOM.img({ src: this.props.photo }, null)),
      React.DOM.td(null, this.props.itemsLeft),
      React.DOM.td(
        null,
        React.DOM.button({ onClick: this.deleteProduct }, "Delete")
      )
    );
  },
});
