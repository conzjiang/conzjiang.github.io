(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var TechList = Conz.TechList;

  Conz.Copyright = React.createClass({
    render: function () {
      return (
        <section className="section white">
          <article className="copyright">
            <h3>Constance Jiang{'\u0027'}s Portfolio</h3>
            {'\u00A9'} 2015 Constance Jiang
            <TechList techs={["React.js"]} />
          </article>
        </section>
      );
    }
  });
})(this);
