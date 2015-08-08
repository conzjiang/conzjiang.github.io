(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var About = Conz.About,
      Projects = Conz.Projects,
      Project = Conz.Project,
      Copyright = Conz.Copyright;

  Conz.App = React.createClass({displayName: "App",
    getInitialState: function () {
      return {
        projects: []
      };
    },

    componentDidMount: function () {
      this.setState({
        projects: [
          {
            name: "Clickster",
            live: "https://clickster.herokuapp.com/",
            github: "https://github.com/conzjiang/clickster_v2",
            image: "images/clickster.jpg",
            tech: ["Rails", "Backbone.js", "responsively-designed"],
            description: "Track the TV shows you watch, love, want to watch, etc."
          },
          {
            name: "A Very Hungry Caterpillar",
            live: "http://conzjiang.github.io/snake",
            github: "https://github.com/conzjiang/snake",
            image: "images/snake.jpg",
            tech: ["JavaScript", "jQuery"],
            description: "Classic game of Snake in the browser."
          },
          {
            name: "dollabill",
            github: "https://github.com/conzjiang/dollabill",
            image: "images/dollabill.jpg",
            tech: ["JavaScript"],
            description: "Custom JavaScript implementation of jQuery."
          }
        ]
      });
    },

    render: function () {
      var projects = this.state.projects.map(function (project, i) {
        var className = i % 2 ? "white" : "black";

        return (
          React.createElement(Project, {
            key: "project-" + i, 
            project: project, 
            className: className})
        );
      });

      return (
        React.createElement("div", {className: "wrapper"}, 
          React.createElement(About, null), 
          React.createElement(Projects, null), 
          projects, 
          React.createElement(Copyright, null)
        )
      );
    }
  });
})(this);