(function (root) {
  var Conz = root.Conz = root.Conz || {};

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

    }
  });
})(this);