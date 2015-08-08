(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.TechList = React.createClass({displayName: "TechList",
    propTypes: {
      techs: React.PropTypes.array
    },

    render: function () {
      var techs = this.props.techs.map(function (tech, i) {
        return (
          React.createElement("span", {key: "tech-" + i, className: "tech"}, tech)
        );
      });

      return (
        React.createElement("dl", {className: "tech-list"}, 
          React.createElement("dt", {className: "label"}, "Built with"), 
          React.createElement("dd", null, techs)
        )
      );
    }
  });
})(this);
