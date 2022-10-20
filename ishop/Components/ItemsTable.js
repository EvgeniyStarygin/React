var ItemsTable = React.createClass({
  displayName: "ItemsTable",
  propTypes: {
    shop: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        photo: React.PropTypes.string.isRequired,
        itemsLeft: React.PropTypes.number.isRequired,
        code: React.PropTypes.number.isRequired,
      })
    ),
    headers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  },
  render: function () {
    return React.DOM.table(
      { className: "IShop", cellSpacing: 0 },
      React.createElement(ItemsTableCaption, { caption: this.props.shop }),
      React.createElement(ItemsTableBody, {
        headers: this.props.headers,
        items: this.props.items,
      })
    );
  },
});
