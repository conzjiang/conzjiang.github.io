(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.ContactLink = React.createClass({
    propTypes: {
      url: React.PropTypes.string,
      icon: React.PropTypes.string,
      description: React.PropTypes.description,
      showLabel: React.PropTypes.func
    },

    render: function () {
      return (
        <li>
          <a href={this.props.url}
            target="_blank"
            className={this.props.icon}
            onHover={this.showLabel}></a>
        </li>
      );
    },

    showLabel: function () {
      this.props.showLabel(this.props.description);
    }
  });
})(this);