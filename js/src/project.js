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
      var techs = project.tech.map(function (tech, i) {
        return (
          <span key={"tech-" + i} className="tech">{tech}</span>
        );
      });

      return (
        <section className={"section " + this.props.className}>
          <h2>{project.name}</h2>

          <dl className="tech-list">
            <dt className="label">Built with</dt>
            <dd>{techs}</dd>
          </dl>

          <a href={project.live || project.github} target="_blank">
            <img className="project-image" src={project.image} />
          </a>

          <ul className="project-links group">
            <ProjectLink url={project.live} text="Live" />
            <ProjectLink url={project.github} text="Github" />
          </ul>

          <p className="project-description">{project.description}</p>
        </section>
      );
    }
  });
})(this);
