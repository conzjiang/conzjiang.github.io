(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var App = Conz.App;
  var ContactLinks = Conz.ContactLinks;

  React.render(React.createElement(App, null), document.getElementById("root"));

  React.render(
    React.createElement(ContactLinks, {className: "contact-floats", showX: true}),
    document.getElementById("contact-me")
  );
})(this);
