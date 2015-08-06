(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Main = Conz.Main;
  var Projects = Conz.Projects;

  React.render(<Main />, document.getElementById("main"));
  React.render(<Projects />, document.getElementById("projects"));
})(this);