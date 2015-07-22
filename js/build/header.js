(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Components = Conz.Components = Conz.Components || {};

  Components.Header = React.createClass({displayName: "Header",
    propTypes: {
      selected: React.PropTypes.string
    },

    render: function () {
      var sections = ["about", "skills", "projects"];
      sections = sections.map(this.createSection);

      return (
        React.createElement("ul", {className: "nav-links"}, 
          sections
        )
      );
    },

    createSection: function (section, i) {
      var url = "#" + section;
      var text = section[0].toUpperCase() + section.slice(1);
      var className = "";

      if (this.props.selected === section) {
        className = "selected";
      }

      return (
        React.createElement("li", {key: "nav-link-" + i}, 
          React.createElement("a", {className: className, href: url}, 
            text
          )
        )
      );
    }
  });
})(this);
