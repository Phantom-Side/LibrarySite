// Подсветка активного пункта меню в зависимости от текущей страницы
document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll("nav a");
    links.forEach(function (link) {
        var href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});
