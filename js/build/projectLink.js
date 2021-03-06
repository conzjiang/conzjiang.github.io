(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.ProjectLink = React.createClass({displayName: "ProjectLink",
    propTypes: {
      url: React.PropTypes.string,
      text: React.PropTypes.string
    },

    render: function () {
      return (React.createElement("li", null, this.link()));
    },

    link: function () {
      if (this.props.url) {
        return (
          React.createElement("a", {href: this.props.url, className: "project-link", target: "_blank"}, 
            this.props.text
          )
        );
      } else {
        return (React.createElement("span", {className: "blank-project-link"}, this.props.text));
      }
    }
  });
})(this);