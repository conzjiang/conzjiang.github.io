(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var ContactLinks = Conz.ContactLinks;

  Conz.About = React.createClass({displayName: "About",
    getInitialState: function () {
      return {
        selectedLink: "",
        selectedUrl: "#"
      };
    },

    render: function () {
      return (
        React.createElement("section", {className: "section black"}, 
          React.createElement("h1", null, "Constance Jiang"), 
          React.createElement("strong", {className: "sub-header"}, "Software Engineer in NYC"), 

          React.createElement(ContactLinks, {className: "contact-links", showLabel: this.showLabel}), 

          React.createElement("label", {ref: "description", className: "contact-description"}, 
            React.createElement("a", {href: this.state.selectedUrl, target: "_blank"}, 
              this.state.selectedLink
            )
          ), 

          React.createElement("figure", {className: "triangle", id: "triangle"})
        )
      );
    },

    showLabel: function (description, url) {
      this.setState({
        selectedLink: description,
        selectedUrl: url
      });
    }
  });
})(this);
