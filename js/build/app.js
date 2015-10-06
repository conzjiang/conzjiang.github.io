(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var About = Conz.About,
      Projects = Conz.Projects,
      Project = Conz.Project,
      Copyright = Conz.Copyright;

  Conz.App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
      return {
        projects: []
      };
    },

    componentDidMount: function componentDidMount() {
      this.setState({
        projects: [{
          name: "Qliqster",
          live: "https://qliqster.com",
          github: "https://github.com/conzjiang/qliqster",
          image: "images/qliqster.jpg",
          tech: ["Rails", "Backbone.js", "responsively-designed"],
          description: "Track the TV shows you watch, love, want to watch, etc."
        }, {
          name: 'hello world!',
          live: 'http://hello.constancejiang.com',
          github: 'https://github.com/conzjiang/node_chatroom',
          image: 'images/hello_world.jpg',
          tech: ['Node.js', 'socket.io', 'Backbone.js'],
          description: 'Live chatroom with private chat functionality.'
        }, {
          name: "dollabill",
          github: "https://github.com/conzjiang/dollabill",
          image: "images/dollabill.jpg",
          tech: ["JavaScript"],
          description: "Custom JavaScript implementation of jQuery."
        }, {
          name: "A Very Hungry Caterpillar",
          live: "http://conzjiang.github.io/snake",
          github: "https://github.com/conzjiang/snake",
          image: "images/snake.jpg",
          tech: ["JavaScript", "jQuery"],
          description: "Classic game of Snake in the browser."
        }]
      });
    },

    render: function render() {
      var projects = this.state.projects.map(function (project, i) {
        var className = i % 2 ? "white" : "black";

        return React.createElement(Project, {
          key: "project-" + i,
          project: project,
          className: className });
      });

      var copyrightClass = this.state.projects.length % 2 ? "white" : "black";

      return React.createElement(
        "div",
        { className: "wrapper" },
        React.createElement(About, null),
        React.createElement(Projects, null),
        projects,
        React.createElement(Copyright, { className: copyrightClass })
      );
    }
  });
})(this);
