(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var ContactLink = Conz.ContactLink;

  Conz.Main = React.createClass({displayName: "Main",
    getInitialState: function () {
      return {
        selectedLink: "",
        selectedUrl: "#"
      };
    },

    render: function () {
      return (
        React.createElement("section", {className: "section"}, 
          React.createElement("h1", null, "Constance Jiang"), 
          React.createElement("strong", {className: "sub-header"}, "Software Engineer in NYC"), 

          React.createElement("ul", {className: "contact-links group"}, 
            React.createElement(ContactLink, {
              url: "mailto:conzjiang(@)gmail.com", 
              icon: "icon-email", 
              description: "conzjiang(@)gmail.com", 
              showLabel: this.showLabel}), 

            React.createElement(ContactLink, {
              url: "#", 
              icon: "icon-resume", 
              description: "Resume.pdf", 
              showLabel: this.showLabel}), 

            React.createElement(ContactLink, {
              url: "https://www.linkedin.com/in/conzjiang", 
              icon: "icon-linkedin", 
              description: "LinkedIn: conzjiang", 
              showLabel: this.showLabel}), 

            React.createElement(ContactLink, {
              url: "https://github.com/conzjiang", 
              icon: "icon-github", 
              description: "Github: conzjiang", 
              showLabel: this.showLabel})
          ), 

          React.createElement("label", {ref: "description", className: "contact-description"}, 
            React.createElement("a", {href: this.state.selectedUrl, target: "_blank"}, 
              this.state.selectedLink
            )
          )
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
