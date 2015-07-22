(function (root) {
  var Header = React.createClass({
    render: function () {
      return (
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      );
    }
  });

  React.render(<Header />, document.getElementById("nav"));
})(this);