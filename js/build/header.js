(function (root) {
  var Header = React.createClass({displayName: "Header",
    render: function () {
      return (
        React.createElement("ul", {className: "nav-links"}, 
          React.createElement("li", null, React.createElement("a", {href: "#about"}, "About")), 
          React.createElement("li", null, React.createElement("a", {href: "#skills"}, "Skills")), 
          React.createElement("li", null, React.createElement("a", {href: "#projects"}, "Projects"))
        )
      );
    }
  });

  React.render(React.createElement(Header, null), document.getElementById("nav"));
})(this);