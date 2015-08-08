(function (root) {
  var Conz = root.Conz = root.Conz || {};
  var App = Conz.App;

  React.render(<App />, document.getElementById("root"));

  var hideTriangle = function () {
    if (window.scrollY > 20) {
      document.getElementById("triangle").classList.add("hide");
      window.removeEventListener("scroll", hideTriangle);
      console.log("Asdf");
    }
  };

  window.addEventListener("scroll", hideTriangle);
})(this);
