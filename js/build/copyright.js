(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var TechList = Conz.TechList;

  Conz.Copyright = React.createClass({
    displayName: "Copyright",

    propTypes: {
      className: React.PropTypes.string
    },

    render: function render() {
      return React.createElement(
        "section",
        { className: "section " + this.props.className },
        React.createElement(
          "article",
          { className: "copyright" },
          React.createElement(
            "h3",
            null,
            "Constance Jiang's Portfolio"
          ),
          "\u00A9",
          " 2015 Constance Jiang",
          React.createElement(TechList, { techs: ["React.js"] })
        )
      );
    }
  });
})(this);
