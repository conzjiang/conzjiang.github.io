(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var Components = Conz.Components = Conz.Components || {};

  Components.About = React.createClass({
    render: function () {
      return (
        <article className="about">
          <ul className="contact-links">
            <li>Based in New York, NY</li>

            <li><a href="#" target="_blank">Download Resume (PDF)</a></li>

            <li>
              <a href="https://www.linkedin.com/in/conzjiang"
                target="_blank">LinkedIn</a>
            </li>

            <li>
              <a href="https://github.com/conzjiang" target="_blank">Github</a>
            </li>

            <li><a href="mailto:conzjiang@gmail.com">Email</a></li>
          </ul>
        </article>
      );
    }
  });
})(this);