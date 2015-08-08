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
          <img className="project-image" src={project.image} />

          <ul className="project-links group">
            <ProjectLink url={this.props.project.live} text="Live" />
            <ProjectLink url={this.props.project.github} text="Github" />
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