(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Project = Conz.Project;

  Conz.Projects = React.createClass({displayName: "Projects",
    render: function () {
      return (
        React.createElement("section", {className: "section white"}, 
          React.createElement("h1", {className: "solo"}, "Projects")
        )
      );
    }
  });
})(this);
