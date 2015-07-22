(function (root) {
  var Conz = root.Conz;
  var Header = Conz.Components.Header;
  var About = Conz.Components.About;

  Conz.Router = Backbone.Router.extend({
    initialize: function (options) {
      this.headerEl = options.headerEl;
      this.rootEl = options.rootEl;
    },

    routes: {
      "": "about",
      "about": "about",
      "skills": "skills",
      "projects": "projects"
    },

    about: function () {
      this.render(React.createElement(About, null));
      this.selectHeader("about");
    },

    skills: function () {
      this.selectHeader("skills");
    },

    projects: function () {
      this.selectHeader("projects");
    },

    render: function (component) {
      React.render(component, this.rootEl);
    },

    selectHeader: function (link) {
      React.render(React.createElement(Header, {selected: link}), this.headerEl);
    }
  });
})(this);
