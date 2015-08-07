(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var About = Conz.About, Projects = Conz.Projects;

  Conz.App = React.createClass({displayName: "App",
    render: function () {
      return (
        React.createElement("div", {className: "wrapper"}, 
          React.createElement(About, null), 
          React.createElement(Projects, null)
        )
      );
    }
  });
})(this);