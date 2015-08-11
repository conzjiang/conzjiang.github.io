(function (root) {
  var main = document.getElementById("root");
  var contactMe = document.getElementById("contact-floats");
  var contactFloats = contactMe.querySelectorAll(".contact-floats")[0];
  var contactLinksOpen = false;
  var x = contactFloats.querySelectorAll(".x")[0];

  main.addEventListener("scroll", function () {
    if (main.scrollTop > 20) {
      document.getElementById("triangle").classList.add("hide");
    }

    if (main.scrollTop > window.innerHeight) {
      contactMe.classList.add("show");
    } else {
      contactMe.classList.remove("show");
    }
  });

  contactFloats.addEventListener("click", function (e) {
    if (contactLinksOpen) { return; }

    contactLinksOpen = true;
    e.preventDefault();
    contactMe.classList.add("open");
    main.classList.add("overflow-hidden");
  });

  var closeModal = function (e) {
    e.stopPropagation();
    contactMe.classList.remove("open");
    main.classList.remove("overflow-hidden");

    setTimeout(function () {
      contactLinksOpen = false;
    });
  };

  x.addEventListener("click", closeModal);
  document.querySelectorAll(".cover")[0].addEventListener("click", closeModal);
})(this);
