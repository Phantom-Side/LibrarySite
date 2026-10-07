document.addEventListener("DOMContentLoaded", function () {
    // Подсветка активного пункта меню в зависимости от текущей страницы
    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll(".nav-links a");
    links.forEach(function (link) {
        var href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    // Бургер-меню на мобильных: показать/скрыть список ссылок
    var toggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");
    if (toggle && navLinks) {
        toggle.addEventListener("click", function () {
            var isOpen = navLinks.classList.toggle("open");
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Закрывать меню после перехода по ссылке (удобнее на телефоне)
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }
});
