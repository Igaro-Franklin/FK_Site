window.addEventListener("scroll", function() {
    var irTop = document.getElementById("ir-top");
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY >= 100) {
        irTop.classList.add("mostrar");
    } else {
        irTop.classList.remove("mostrar");
    }
});