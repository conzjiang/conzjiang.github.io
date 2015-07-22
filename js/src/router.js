(function (root) {
  var Conz = root.Conz;
  var About = Conz.Components.About;

  Conz.Router = Backbone.Router.extend({
    initialize: function (options) {
      this.rootEl = options.rootEl;
    },

    routes: {
      "": "about",
      "about": "about",
      "skills": "skills",
      "projects": "projects"
    },

    about: function () {
      this.render(<About />);
    },

    render: function (component) {
      React.render(component, this.rootEl);
    }
  });
})(this);