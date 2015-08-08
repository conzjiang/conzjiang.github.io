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
      var techs = project.tech.map(function (tech, i) {
        return (
          React.createElement("span", {key: "tech-" + i, className: "tech"}, tech)
        );
      });

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

          React.createElement("p", {className: "project-description"}, project.description), 

          React.createElement("dl", {className: "tech-list"}, 
            React.createElement("dt", {className: "label"}, "Built with"), 
            React.createElement("dd", null, techs)
          )
        )
      );
    }
  });
})(this);
