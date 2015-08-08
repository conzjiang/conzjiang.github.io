(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.ContactLink = React.createClass({displayName: "ContactLink",
    propTypes: {
      url: React.PropTypes.string,
      icon: React.PropTypes.string,
      description: React.PropTypes.string,
      showLabel: React.PropTypes.func
    },

    render: function () {
      return (
        React.createElement("li", {className: this.props.icon}, 
          React.createElement("a", {href: this.props.url, 
            target: "_blank", 
            className: "icon-" + this.props.icon, 
            onMouseOver: this.showLabel})
        )
      );
    },

    showLabel: function () {
      this.props.showLabel(this.props.description, this.props.url);
    }
  });
})(this);
