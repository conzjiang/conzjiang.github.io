(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var ContactLink = Conz.ContactLink;

  Conz.ContactLinks = React.createClass({displayName: "ContactLinks",
    propTypes: {
      className: React.PropTypes.string,
      showLabel: React.PropTypes.func
    },

    render: function () {
      return (
        React.createElement("ul", {className: this.props.className + " group"}, 
          React.createElement(ContactLink, {
            url: "mailto:conzjiang(@)gmail.com", 
            icon: "icon-email", 
            description: "conzjiang(@)gmail.com", 
            showLabel: this.props.showLabel}), 

          React.createElement(ContactLink, {
            url: "Constance Jiang - Resume.pdf", 
            icon: "icon-resume", 
            description: "Resume.pdf", 
            showLabel: this.props.showLabel}), 

          React.createElement(ContactLink, {
            url: "https://www.linkedin.com/in/conzjiang", 
            icon: "icon-linkedin", 
            description: "LinkedIn: conzjiang", 
            showLabel: this.props.showLabel}), 

          React.createElement(ContactLink, {
            url: "https://github.com/conzjiang", 
            icon: "icon-github", 
            description: "Github: conzjiang", 
            showLabel: this.props.showLabel})
        )
      );
    }
  });
})(this);
