(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var ContactLink = Conz.ContactLink;

  Conz.ContactLinks = React.createClass({
    propTypes: {
      className: React.PropTypes.string,
      showLabel: React.PropTypes.func,
      showX: React.PropTypes.bool
    },

    getDefaultProps: function () {
      return {
        showLabel: function () {},
        showX: false
      };
    },

    render: function () {
      var x;

      if (this.props.showX) {
        x = <li className="x" />;
      }

      return (
        <ul className={this.props.className + " group"}>
          <ContactLink
            url="mailto:conzjiang(@)gmail.com"
            icon="icon-email"
            description="conzjiang(@)gmail.com"
            showLabel={this.props.showLabel} />

          <ContactLink
            url="Constance Jiang - Resume.pdf"
            icon="icon-resume"
            description="Resume.pdf"
            showLabel={this.props.showLabel} />

          <ContactLink
            url="https://www.linkedin.com/in/conzjiang"
            icon="icon-linkedin"
            description="LinkedIn: conzjiang"
            showLabel={this.props.showLabel} />

          <ContactLink
            url="https://github.com/conzjiang"
            icon="icon-github"
            description="Github: conzjiang"
            showLabel={this.props.showLabel} />

          {x}
        </ul>
      );
    }
  });
})(this);
