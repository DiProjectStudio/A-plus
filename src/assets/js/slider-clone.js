// document.addEventListener("DOMContentLoaded", () => {
//     const allSlides = document.querySelectorAll(".swiper-slide");
//
//     const slidesCount = allSlides.length;
//     console.log(slidesCount);
//
//     let iterationCount = 0;
//
//     if (slidesCount >= 9 && !slidesCount) {
//         return;
//     }
//
//     iterationCount = Math.floor(9 / slidesCount);
//
//     console.log(iterationCount);
//
//     for (let i = 0; i < iterationCount; i++) {
//         allSlides.forEach(slide => {
//             const slidesParent = slide.parentElement;
//             let clonedSlide = slide.cloneNode(true);
//             slidesParent.appendChild(clonedSlide);
//             console.log('iteration')
//         })
//     }
// });