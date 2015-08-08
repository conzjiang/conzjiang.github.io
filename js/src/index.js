(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var App = Conz.App;
  var ContactLinks = Conz.ContactLinks;

  React.render(<App />, document.getElementById("root"));

  React.render(
    <ContactLinks className="contact-floats" showX={true} />,
    document.getElementById("contact-me")
  );

  var hideTriangle = function () {
    if (window.scrollY > 20) {
      document.getElementById("triangle").classList.add("hide");
      window.removeEventListener("scroll", hideTriangle);
    }
  };

  window.addEventListener("scroll", hideTriangle);
})(this);
