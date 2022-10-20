var ItemsTableCaption = React.createClass({
  displayName: "ItemsTableCaption",
  propTypes: {
    caption: React.PropTypes.string.isRequired,
  },
  render: function () {
    return React.DOM.caption(null, this.props.caption);
  },
});
