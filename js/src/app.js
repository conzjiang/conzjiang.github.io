(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var About = Conz.About, Projects = Conz.Projects;

  Conz.App = React.createClass({
    render: function () {
      return (
        <div className="wrapper">
          <About />
          <Projects />
        </div>
      );
    }
  });
})(this);