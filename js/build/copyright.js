(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var TechList = Conz.TechList;

  Conz.Copyright = React.createClass({displayName: "Copyright",
    render: function () {
      return (
        React.createElement("section", {className: "section white"}, 
          React.createElement("article", {className: "copyright"}, 
            React.createElement("h3", null, "Constance Jiang", '\u0027', "s Portfolio"), 
            '\u00A9', " 2015 Constance Jiang", 
            React.createElement(TechList, {techs: ["React.js"]})
          )
        )
      );
    }
  });
})(this);
