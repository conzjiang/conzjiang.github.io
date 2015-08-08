(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var App = Conz.App;
  var ContactLinks = Conz.ContactLinks;

  React.render(<App />, document.getElementById("root"));

  React.render(
    <ContactLinks className="contact-floats" showX={true} />,
    document.getElementById("contact-me")
  );
})(this);
