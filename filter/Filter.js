var Filter = React.createClass({
  displayName: "Filter",
  propTypes: {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  },

  getInitialState: function () {
    return {
      isSorted: false,
      filterByText: "",
      wordsToShow: this.props.words,
    };
  },

  showWords: function () {
    var key = 1;
    var arr = this.state.wordsToShow.filter((word) =>
      word.includes(this.state.filterByText)
    );
    return arr.map((word) => React.DOM.div({ key: key++ }, word));
  },

  sortWords: function (EO) {
    this.state.isSorted = !this.state.isSorted;
    this.state.isSorted
      ? this.setState({ wordsToShow: this.props.words.slice(0).sort() })
      : this.setState({ wordsToShow: this.props.words });
  },

  reset: function (EO) {
    this.setState({ isSorted: false });
    this.setState({ filterByText: "" });
    this.setState({ wordsToShow: this.props.words });
  },

  filterWords: function (EO) {
    var value = EO.target.value;
    this.setState({ filterByText: value });
  },

  findWords: function () {},

  render: function () {
    return React.DOM.div(
      { className: "Filter" },
      React.DOM.input(
        {
          type: "checkbox",
          onChange: this.sortWords,
          checked: this.state.isSorted,
        },
        null
      ),
      React.DOM.input(
        {
          type: "text",
          onChange: this.filterWords,
          value: this.state.filterByText,
        },
        null
      ),

      React.DOM.button(
        {
          onClick: this.reset,
        },
        "Сброс"
      ),
      React.DOM.div({ className: "WordsBlock" }, this.showWords())
    );
  },
});
