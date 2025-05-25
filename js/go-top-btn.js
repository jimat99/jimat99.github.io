// START GO SCROLL TOP
(function goScrollTop() {
  const goTopBtn = document.getElementById("goTopBtn");

  // Show button when user scrolls down
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goTopBtn.classList.remove("d-none");
    } else {
      goTopBtn.classList.add("d-none");
    }
  });

  // Scroll to top when clicked
  goTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
  });
})();
// END GO SCROLL TOP