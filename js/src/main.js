(function (root) {
  var Conz = root.Conz = root.Conz || {};

  Conz.Main = React.createClass({
    render: function () {
      return (
        <section className="section">
          <h1>Constance Jiang</h1>
          <strong className="sub-header">Software Engineer in NYC</strong>

          <ul className="contact-links group">
            <ContactLink
              url="mailto:conzjiang(@)gmail.com"
              icon="icon-email"
              description="conzjiang(@)gmail.com"
              showLabel={this.showLabel} />

            <ContactLink
              url="#"
              icon="icon-resume"
              description="Resume.pdf"
              showLabel={this.showLabel} />

            <ContactLink
              url="https://www.linkedin.com/in/conzjiang"
              icon="icon-linkedin"
              description="LinkedIn"
              showLabel={this.showLabel} />

            <ContactLink
              url="https://github.com/conzjiang"
              icon="icon-github"
              description="Github"
              showLabel={this.showLabel} />
          </ul>

          <label className="contact-description"></label>
        </section>
      );
    },

    showLabel: function () {
      debugger
    }
  });
})(this);