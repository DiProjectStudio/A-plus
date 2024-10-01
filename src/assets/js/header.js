document.addEventListener("DOMContentLoaded", () => {
    const headerMenuToggle = document.getElementById("headerMenuToggle");
    const headerNav = document.querySelector('.header__nav');
    const closeBtn = document.getElementById("closeBtn");
    const headerNavItems = document.querySelectorAll('.header__nav a');

    if (headerMenuToggle) {
        headerMenuToggle.addEventListener("click", () => {
            headerNav.classList.toggle("active");
        })

        headerNavItems.forEach(item => {
            item.addEventListener('click', () => {
                console.log('click')
                if (headerNav.classList.contains("active")) {
                    headerNav.classList.remove("active");
                }
            })
        })
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            if (headerNav.classList.contains("active")) {
                headerNav.classList.remove("active");
            }
        })
    }

    $('.slider').on('click', function () {
        $(this).toggleClass('slider-closed');
    });

})