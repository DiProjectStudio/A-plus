document.addEventListener("DOMContentLoaded", () => {
    const headerMenuToggle = document.getElementById("headerMenuToggle");
    const headerNav = document.querySelector('.header__nav');
    const closeBtn = document.getElementById("closeBtn");
    const headerNavItems = document.querySelectorAll('.header__nav a')
    let timeOut;
    if (headerMenuToggle) {
        headerMenuToggle.addEventListener("click", () => {
            clearTimeout(timeOut);
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
                headerNav.style.animation = 'slideUp .5s'; // Устанавливаем анимацию

                // Удаляем класс active после завершения анимации
                headerNav.addEventListener('animationend', () => {
                    headerNav.classList.remove("active");
                    headerNav.style.animation = ''; // Сбрасываем стиль анимации
                }, { once: true }); // Удаляем обработчик после первого срабатывания
            }
        })
    }

    $('.slider').on('click', function() {
        $(this).toggleClass('slider-closed');
    });
})