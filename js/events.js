(function (root) {
  var contactMe = document.getElementById("contact-me");
  var contactFloats = contactMe.querySelectorAll(".contact-floats")[0];

  var hideTriangle = function () {
    if (window.scrollY > 20) {
      document.getElementById("triangle").classList.add("hide");
    }

    if (window.scrollY > window.innerHeight) {
      contactFloats.classList.add("show");
    } else {
      contactFloats.classList.remove("show open");
    }
  };

  window.addEventListener("scroll", hideTriangle);

  var contactLinksOpen = false;

  contactMe.addEventListener("click", function (e) {
    if (contactLinksOpen) { return; }

    contactLinksOpen = true;
    e.preventDefault();
    contactFloats.classList.add("open");
  });

  var x = contactMe.querySelectorAll(".x")[0];

  x.addEventListener("click", function () {
    contactFloats.classList.remove("open");

    setTimeout(function () {
      contactLinksOpen = false;
    });
  });
})(this);
