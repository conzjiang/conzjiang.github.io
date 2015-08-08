(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.TechList = React.createClass({
    propTypes: {
      techs: React.PropTypes.array
    },

    render: function () {
      var techs = this.props.techs.map(function (tech, i) {
        return (
          <span key={"tech-" + i} className="tech">{tech}</span>
        );
      });

      return (
        <dl className="tech-list">
          <dt className="label">Built with</dt>
          <dd>{techs}</dd>
        </dl>
      );
    }
  });
})(this);
