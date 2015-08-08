(function (root) {
  var main = document.getElementById("root");
  var contactMe = document.getElementById("contact-floats");
  var contactFloats = contactMe.querySelectorAll(".contact-floats")[0];

  var hideTriangle = function () {
    if (main.scrollTop > 20) {
      document.getElementById("triangle").classList.add("hide");
    }

    if (main.scrollTop > (window.innerHeight)) {
      contactMe.classList.add("show");
    } else {
      contactMe.classList.remove("show");
    }
  };

  main.addEventListener("scroll", hideTriangle);

  var contactLinksOpen = false;

  contactFloats.addEventListener("click", function (e) {
    if (contactLinksOpen) { return; }

    contactLinksOpen = true;
    e.preventDefault();
    contactMe.classList.add("open");
    main.classList.add("overflow-hidden");
  });

  var x = contactFloats.querySelectorAll(".x")[0];

  x.addEventListener("click", function (e) {
    e.stopPropagation();
    contactMe.classList.remove("open");
    main.classList.remove("overflow-hidden");

    setTimeout(function () {
      contactLinksOpen = false;
    });
  });
})(this);
