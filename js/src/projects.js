(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.Projects = React.createClass({
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
            image: "#",
            tech: ["Rails", "Backbone.js"],
            description: "Track the TV shows you watch, love, want to watch, etc."
          },
          {
            name: "A Very Hungry Caterpillar",
            live: "http://conzjiang.github.io/snake",
            github: "https://github.com/conzjiang/snake",
            image: "#",
            tech: ["JavaScript", "jQuery"],
            description: "Classic game of Snake in the browser."
          },
          {
            name: "dollabill",
            github: "https://github.com/conzjiang/dollabill",
            image: "#",
            tech: ["JavaScript"],
            description: "Custom JavaScript implementation of jQuery."
          }
        ]
      });
    },

    render: function () {
      return (
        <section className="section white">
          <h1>Projects</h1>
          <ul className="projects-list">

          </ul>
        </section>
      );
    }
  });
})(this);
