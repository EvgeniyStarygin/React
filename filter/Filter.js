var Filter = React.createClass({
  displayName: "Filter",
  propTypes: {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  },

  getInitialState: function () {
    return {
      isSorted: false,
      filterByText: "",
      currWords: this.props.words,
    };
  },

  showWords: function () {
    var arr = null;
    if (this.state.filterByText) {
      arr = this.props.words.filter((word) =>
        word.includes(this.state.filterByText)
      );
    } else {
      arr = [...this.props.words];
    }
    if (this.state.isSorted) {
      arr.sort();
    }
    this.setState({ currWords: arr });
  },

  sortWords: function (EO) {
    this.setState({ isSorted: EO.target.checked }, this.showWords);
  },

  reset: function (EO) {
    this.setState(
      {
        isSorted: false,
        filterByText: "",
      },
      this.showWords
    );
  },

  filterWords: function (EO) {
    this.setState({ filterByText: EO.target.value }, this.showWords);
  },

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
      React.DOM.textarea({
        className: "WordsBlock",
        value: this.state.currWords.join("\n"),
      })
    );
  },
});
