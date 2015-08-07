(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.Project = React.createClass({
    propTypes: {
      project: React.PropTypes.object
    },

    render: function () {
      var project = this.props.project;

      return (
        <li>
          <h2>{project.name}</h2>
          <img src={project.image} />

          <dl>
            <dt>Built with</dt>
            <dd>{project.tech.join(", ")}</dd>
          </dl>

          <p>{project.description}</p>
        </li>
      );
    }
  });
})(this);