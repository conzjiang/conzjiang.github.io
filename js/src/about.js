(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Components = Conz.Components = Conz.Components || {};

  Components.About = React.createClass({
    render: function () {
      return (
        <article className="about">
          <ul className="contact-links">
            <li>Based in New York, NY</li>
            <li><a href="#">Download Resume (PDF)</a></li>
            <li>
              <a href="https://www.linkedin.com/in/conzjiang">LinkedIn</a>
            </li>
            <li><a href="https://github.com/conzjiang">Github</a></li>
            <li><a href="mailto:conzjiang@gmail.com">Email</a></li>
          </ul>
        </article>
      );
    }
  });
})(this);