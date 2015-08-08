(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var ProjectLink = Conz.ProjectLink;

  Conz.Project = React.createClass({
    propTypes: {
      project: React.PropTypes.object,
      className: React.PropTypes.string
    },

    render: function () {
      var project = this.props.project;

      return (
        <section className={"section " + this.props.className}>
          <h2>{project.name}</h2>
          <a href={project.live || project.github} target="_blank">
            <img className="project-image" src={project.image} />
          </a>

          <ul className="project-links group">
            <ProjectLink url={project.live} text="Live" />
            <ProjectLink url={project.github} text="Github" />
          </ul>

          <dl>
            <dt>Built with</dt>
            <dd>{project.tech.join(", ")}</dd>
          </dl>

          <p>{project.description}</p>
        </section>
      );
    }
  });
})(this);