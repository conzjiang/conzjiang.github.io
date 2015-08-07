(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var About = Conz.About;
  var Projects = Conz.Projects;

  React.render(React.createElement(About, null), document.getElementById("main"));
  React.render(React.createElement(Projects, null), document.getElementById("projects"));
})(this);