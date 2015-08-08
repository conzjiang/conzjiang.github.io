(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var TechList = Conz.TechList;
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

          <TechList techs={project.techs} />

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
