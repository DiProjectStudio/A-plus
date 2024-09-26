$(document).ready(function () {

    // Оcновные слайдеры
    class Sliders {
        constructor(parent) {
            this.parent = parent;
            this.sliderClone();
            this.sliderInit();
        }

        sliderInit() {
            let swiperSpeed = 600
            document.documentElement.style.setProperty('--swiper-speed-half', `${swiperSpeed / 2}ms`)
            new Swiper(`${this.parent} .swiper`, {
                slidesPerView: "auto",
                centeredSlides: true,
                loop: true,
                spaceBetween: 8,
                speed: swiperSpeed,
                preventInteractionOnTransition: true,
                grabCursor: true,
                followFinger: false,
                breakpoints: {
                    744: {
                        spaceBetween: 10
                    },
                    1200: {
                        spaceBetween: 20
                    }
                },
                navigation: {
                    nextEl: `${this.parent} .swiper-arrow-next`,
                    prevEl: `${this.parent} .swiper-arrow-prev`,
                }
            })
        }

        sliderClone() {
            const allSlides = document.querySelectorAll(`${this.parent} .swiper-slide`);
            const slidesCount = allSlides.length;
            let iterationCount = 0;

            if (slidesCount >= 9 || !slidesCount) {
                return;
            }

            iterationCount = Math.floor(9 / slidesCount);
            console.log(iterationCount);

            for (let i = 0; i < iterationCount - 1; i++) {
                allSlides.forEach(slide => {
                    const slidesParent = slide.parentElement;
                    let clonedSlide = slide.cloneNode(true);
                    slidesParent.appendChild(clonedSlide);
                });
            }
        }
    }

    const sliderShops = new Sliders('.shops');
    const sliderEntertainments = new Sliders('.entertainments');
    const sliderOthers = new Sliders('.others');


    // Схемы

    const thumbs = new Swiper('.scheme__images_thumbs.swiper', {
        slidesPerView: 5,
        spaceBetween: 8,
        breakpoints: {
            744: {
                spaceBetween: 10,
                direction: 'vertical'
            }
        }
    })


    const schemeImageSlider = new Swiper('.scheme__images_main.swiper', {
        slidesPerView: 1,
        thumbs: {
            swiper: thumbs
        },
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        on: {
            slideChange: function () {
                updateFloorNumber(this);
            }
        }
    });

    updateFloorNumber(schemeImageSlider);

    function updateFloorNumber(swiper) {
        const floorNumberElement = document.querySelector('.floor-number');
        if (floorNumberElement) {
            const activeSlide = swiper.slides[swiper.activeIndex];
            const dataNumber = activeSlide.getAttribute('data-number');
            floorNumberElement.innerText = `${dataNumber} этаж`;
        }
    }
});