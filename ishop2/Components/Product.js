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
    isDeleted: React.PropTypes.bool.isRequired,
  },

  productClicked: function (EO) {
    this.props.cbProductSelected(EO.currentTarget.dataset.code);
  },

  deleteProduct: function (EO) {
    EO.stopPropagation();
    this.props.cbDeleteProduct(EO.target.dataset.code);
  },

  render: function () {
    return !this.props.isDeleted
      ? React.DOM.tr(
          {
            className: this.props.isSelected ? "orange" : "",
            "data-code": this.props.code,
            onClick: this.productClicked,
          },
          React.DOM.td(null, this.props.name),
          React.DOM.td(null, this.props.price),
          React.DOM.td(null, React.DOM.img({ src: this.props.photo }, null)),
          React.DOM.td(null, this.props.itemsLeft),
          React.DOM.td(
            null,
            React.DOM.button(
              { "data-code": this.props.code, onClick: this.deleteProduct },
              "Delete"
            )
          )
        )
      : null;
  },
});
