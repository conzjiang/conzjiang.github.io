(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var ContactLink = Conz.ContactLink;

  Conz.About = React.createClass({
    getInitialState: function () {
      return {
        selectedLink: "",
        selectedUrl: "#"
      };
    },

    render: function () {
      return (
        <section className="section black">
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
              description="LinkedIn: conzjiang"
              showLabel={this.showLabel} />

            <ContactLink
              url="https://github.com/conzjiang"
              icon="icon-github"
              description="Github: conzjiang"
              showLabel={this.showLabel} />
          </ul>

          <label ref="description" className="contact-description">
            <a href={this.state.selectedUrl} target="_blank">
              {this.state.selectedLink}
            </a>
          </label>
        </section>
      );
    },

    showLabel: function (description, url) {
      this.setState({
        selectedLink: description,
        selectedUrl: url
      });
    }
  });
})(this);
