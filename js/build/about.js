(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Components = Conz.Components = Conz.Components || {};

  Components.About = React.createClass({displayName: "About",
    render: function () {
      return (
        React.createElement("article", {className: "about"}, 
          React.createElement("ul", {className: "contact-links"}, 
            React.createElement("li", null, "Based in New York, NY"), 

            React.createElement("li", null, React.createElement("a", {href: "#", target: "_blank"}, "Download Resume (PDF)")), 

            React.createElement("li", null, 
              React.createElement("a", {href: "https://www.linkedin.com/in/conzjiang", 
                target: "_blank"}, "LinkedIn")
            ), 

            React.createElement("li", null, 
              React.createElement("a", {href: "https://github.com/conzjiang", target: "_blank"}, "Github")
            ), 

            React.createElement("li", null, React.createElement("a", {href: "mailto:conzjiang@gmail.com"}, "Email"))
          )
        )
      );
    }
  });
})(this);