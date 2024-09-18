document.addEventListener("DOMContentLoaded", () => {
    const headerMenuToggle = document.getElementById("headerMenuToggle");
    const headerMenu = document.querySelector('.header__nav');
    const closeBtn = document.getElementById("closeBtn");
    if (headerMenuToggle) {
        headerMenuToggle.addEventListener("click", () => {
            headerMenu.classList.toggle("active");
        })
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            if (headerMenu.classList.contains("active")) {
                headerMenu.classList.remove("active");
            }
        })
    }

    $('.slider').on('click', function() {
        $(this).toggleClass('slider-closed');
    });
})