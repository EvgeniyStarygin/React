var ItemsTableHeader = React.createClass({
  displayName: "ItemsTableHeader",
  propTypes: {
    headers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  },

  render: function () {
    return React.DOM.tr(
      null,
      this.props.headers.map((item) => React.DOM.th(null, item))
    );
  },
});
