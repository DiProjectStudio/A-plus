document.addEventListener("DOMContentLoaded", () => {
    const headerMenuToggle = document.getElementById("headerMenuToggle");
    const headerNav = document.querySelector('.header__nav');
    const closeBtn = document.getElementById("closeBtn");
    const headerNavItems = document.querySelectorAll('.header__nav a')
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
                headerNav.style.animation = 'slideUp .5s'; // Устанавливаем анимацию
                console.log('click');
                // headerNav.classList.remove("active");
                // Удаляем класс active после завершения анимации
                headerNav.addEventListener('animationend', () => {
                    console.log('click1')
                    headerNav.classList.remove("active");
                    headerNav.style.animation = ''; // Сбрасываем стиль анимации
                }, { once: true }); // Удаляем обработчик после первого срабатывания
            }
        })
    }

    $('.slider').on('click', function() {
        $(this).toggleClass('slider-closed');
    });

    // document.addEventListener('scroll', function() {
    //     const header = document.querySelector('.header');
    //     if (window.scrollY > 0) {
    //         header.style.transform = 'translateY(10px)';
    //     } else {
    //         header.style.transform = 'translateY(0)';
    //     }
    // });
})