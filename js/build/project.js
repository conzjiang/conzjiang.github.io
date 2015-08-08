(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var ProjectLink = Conz.ProjectLink;

  Conz.Project = React.createClass({displayName: "Project",
    propTypes: {
      project: React.PropTypes.object,
      className: React.PropTypes.string
    },

    render: function () {
      var project = this.props.project;

      return (
        React.createElement("section", {className: "section " + this.props.className}, 
          React.createElement("h2", null, project.name), 
          React.createElement("a", {href: project.live || project.github, target: "_blank"}, 
            React.createElement("img", {className: "project-image", src: project.image})
          ), 

          React.createElement("ul", {className: "project-links group"}, 
            React.createElement(ProjectLink, {url: project.live, text: "Live"}), 
            React.createElement(ProjectLink, {url: project.github, text: "Github"})
          ), 

          React.createElement("dl", null, 
            React.createElement("dt", null, "Built with"), 
            React.createElement("dd", null, project.tech.join(", "))
          ), 

          React.createElement("p", null, project.description)
        )
      );
    }
  });
})(this);