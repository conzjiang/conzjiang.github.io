(function (root) {
  var Conz = root.Conz;
  var Header = Conz.Components.Header;
  var About = Conz.Components.About;
  var Projects = Conz.Components.Projects;

  Conz.Router = Backbone.Router.extend({
    initialize: function (options) {
      this.headerEl = options.headerEl;
      this.rootEl = options.rootEl;
    },

    routes: {
      "": "about",
      "about": "about",
      "projects": "projects"
    },

    about: function () {
      this.render(React.createElement(About, null));
      this.selectHeader("about");
    },

    projects: function () {
      var projects = [
        {
          title: "Clickster",
          description: "Responsively-designed web app to track TV shows via watchlists",
          techs: ["Rails", "Backbone.js", "PostgreSQL"],
          url: "http://clickster.herokuapp.com",
          github: "https://github.com/conzjiang/clickster_v2"
        },

        {
          title: "for pizza & bunny",
          description: "Live chatroom with private chat functionality",
          techs: ["Node.js", "socket.io", "Backbone.js"],
          url: "http://for-pizza-and-bunny.herokuapp.com",
          github: "https://github.com/conzjiang/node_chatroom"
        },

        {
          title: "A Very Hungry Caterpillar",
          description: "Implementation of Snake to the theme of Eric Carle's The Very Hungry Caterpillar",
          techs: ["JavaScript", "jQuery"],
          url: "http://conzjiang.github.io/snake",
          github: "https://github.com/conzjiang/snake"
        }
      ];

      this.render(React.createElement(Projects, {projects: projects}));
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
