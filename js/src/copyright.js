(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var TechList = Conz.TechList;

  Conz.Copyright = React.createClass({
    propTypes: {
      className: React.PropTypes.string
    },

    render: function () {
      return (
        <section className={"section " + this.props.className}>
          <article className="copyright">
            <h3>Constance Jiang's Portfolio</h3>
            {'\u00A9'} 2015 Constance Jiang
            <TechList techs={["React.js"]} />
          </article>
        </section>
      );
    }
  });
})(this);
