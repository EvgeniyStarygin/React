var ShopName = React.createClass({
  displayName: "ShopName",
  propTypes: {
    caption: React.PropTypes.string.isRequired,
  },
  render: function () {
    return React.DOM.caption(null, this.props.caption);
  },
});
