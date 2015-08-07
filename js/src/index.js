(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var About = Conz.About;
  var Projects = Conz.Projects;

  React.render(<About />, document.getElementById("main"));
  React.render(<Projects />, document.getElementById("projects"));
})(this);