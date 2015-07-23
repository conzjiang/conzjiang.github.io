(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Components = Conz.Components = Conz.Components || {};

  Components.Projects = React.createClass({displayName: "Projects",
    propTypes: {
      projects: React.PropTypes.array
    },

    render: function () {
      var projects = this.props.projects.map(function (project, i) {
        return (
          React.createElement("li", {key: "project-" + i}, 
            React.createElement("img", {src: project.image}), 
            React.createElement("h3", null, React.createElement("a", {href: project.url}, project.title)), 
            React.createElement("p", null, project.description), 
            React.createElement("small", null, "Built with: ", project.techs.join(", ")), 
            React.createElement("small", null, "Github: ", React.createElement("a", {href: project.github}, "github"))
          )
        );
      });

      return (
        React.createElement("article", {className: "projects"}, 
          React.createElement("ul", {className: "projects-list"}, 
            projects
          )
        )
      );
    }
  });
})(this);
