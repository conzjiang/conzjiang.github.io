(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var ContactLinks = Conz.ContactLinks;

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

          <ContactLinks className="contact-links" showLabel={this.showLabel} />

          <label ref="description" className="contact-description">
            <a href={this.state.selectedUrl} target="_blank">
              {this.state.selectedLink}
            </a>
          </label>

          <figure className="triangle" id="triangle"></figure>
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
