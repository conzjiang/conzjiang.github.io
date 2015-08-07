(function (root) {
  var Conz = root.Conz = root.Conz || {};

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