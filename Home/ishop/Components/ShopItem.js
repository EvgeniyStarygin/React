var ShopItem = React.createClass({
  displayName: "ShopItem",
  propTypes: {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    photo: React.PropTypes.string.isRequired,
    itemsLeft: React.PropTypes.number.isRequired,
  },
  render: function () {
    return React.DOM.tr(
      null,
      React.DOM.td(null, this.props.name),
      React.DOM.td(null, this.props.price),
      React.DOM.td(null, React.DOM.img({ src: this.props.photo }, null)),
      React.DOM.td(null, this.props.itemsLeft)
    );
  },
});
