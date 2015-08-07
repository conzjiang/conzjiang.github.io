(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.ProjectLink = React.createClass({
    propTypes: {
      url: React.PropTypes.string,
      text: React.PropTypes.string
    },

    render: function () {
      return (<li>{this.link()}</li>);
    },

    link: function () {
      if (this.props.url) {
        return (
          <a href={this.props.url} className="project-link">
            {this.props.text}
          </a>
        );
      } else {
        return this.props.text;
      }
    }
  });
})(this);