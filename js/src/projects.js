(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Components = Conz.Components = Conz.Components || {};

  Components.Projects = React.createClass({
    propTypes: {
      projects: React.PropTypes.array
    },

    render: function () {
      var projects = this.props.projects.map(function (project, i) {
        return (
          <li key={"project-" + i}>
            <img src={project.image} />
            <h3><a href={project.url}>{project.title}</a></h3>
            <p>{project.description}</p>
            <small>Built with: {project.techs.join(", ")}</small>
            <small>Github: <a href={project.github}>github</a></small>
          </li>
        );
      });

      return (
        <article className="projects">
          <ul className="projects-list">
            {projects}
          </ul>
        </article>
      );
    }
  });
})(this);
