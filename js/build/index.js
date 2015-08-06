(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Main = Conz.Main;
  var Projects = Conz.Projects;

  React.render(React.createElement(Main, null), document.getElementById("main"));
  React.render(React.createElement(Projects, null), document.getElementById("projects"));
})(this);