(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Components = Conz.Components = Conz.Components || {};

  Components.Header = React.createClass({
    propTypes: {
      selected: React.PropTypes.string
    },

    render: function () {
      var sections = ["about", "skills", "projects"];
      sections = sections.map(this.createSection);

      return (
        <ul className="nav-links">
          {sections}
        </ul>
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
        <li key={"nav-link-" + i}>
          <a className={className} href={url}>
            {text}
          </a>
        </li>
      );
    }
  });
})(this);
