var ShopItemsList = React.createClass({
  displayName: "ShopItemsList",
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

  render: function () {

    var itemsList = this.props.items.map((item) =>
      React.createElement(ShopItem, {
        key: item.code,
        name: item.name,
        price: item.price,
        photo: item.photo,
        itemsLeft: item.itemsLeft,
      })
    );

    return (
      React.createElement(ItemsTableHeader, {headers: this.props.headers}),
      React.DOM.tbody(null, itemsList)
    );
  },
});
