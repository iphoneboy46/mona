export default function SwiperModule() {
  // Home Banner
  const homeSwiper = new Swiper(".homes-bn .swiper", {
    // functionSlider(".homes-bn", {
    // speed: 10000,
    // autoplay: {
    //   delaY: 2000,
    // },
    // slidesPerGroup: 2,
    // initialSlide: 0,
    // centeredSlides: false,
    loop: false,
    // effect: "fade",
    spaceBetween: 0,
    slidesPerView: "auto",
  });

  const detailSwiper = new Swiper(".js-detail-swiper", {
    slidesPerView: 1,
    touchStartPreventDefault: false,
  });

  const headerSwiper = new Swiper(".js-header-swiper", {
    slidesPerView: 1,
    touchStartPreventDefault: false,
    autoplay: {
      delay: 3000,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const recentSwiper = new Swiper(".js-recent-swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const sectionHomeSeller = document.querySelector(".section-home-seller");
if(sectionHomeSeller){
  const sellerSwiper = new Swiper(sectionHomeSeller.querySelector(".js-seller-swiper"), {
    spaceBetween: 24,
    slidesPerView: 2,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: sectionHomeSeller.querySelector(".swiper-button-next.seller-button"),
      prevEl: sectionHomeSeller.querySelector(".swiper-button-prev.seller-button"),
    },
    pagination: {
      el: sectionHomeSeller.querySelector(".swiper-pagination"),
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
      },
    },
  });
}
  

const sectionHomeSales = document.querySelector(".section-home-sales")
if(sectionHomeSales){
  const salesSwiper = new Swiper(sectionHomeSales.querySelector(".js-sales-swiper"), {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: sectionHomeSales.querySelector(".swiper-pagination"),
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: sectionHomeSales.querySelector(".swiper-button-next.seller-button2"),
      prevEl: sectionHomeSales.querySelector(".swiper-button-prev.seller-button2"),
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        slidesPerView: "auto",
        navigation: {
          nextEl: sectionHomeSales.querySelector(".swiper-button-next.seller-button2"),
          prevEl: sectionHomeSales.querySelector(".swiper-button-prev.seller-button2"),
        },
      },
      1366: {
        spaceBetween: 120,
        slidesPerView: "auto",
        navigation: {
          nextEl: sectionHomeSales.querySelector(".swiper-button-next.seller-button2"),
          prevEl: sectionHomeSales.querySelector(".swiper-button-prev.seller-button2"),
        },
      },
    },
  });
}
  

 

  $(".js-detail-process-bar").on("click", "li", (e) => {
    const target = $(e.currentTarget);
    const list = $(".js-detail-process-bar").find("li");
    const index = list.index(target);
    detailSwiper.slideTo(index);
  });

  $(window).ready(function () {
    $(".js-about-swiper").infiniteslide({
      pauseonhover: false,
      direction: "up",
      responsive: true,
      clone: 10,
    });

    $(".js-about-swiper-revert").infiniteslide({
      direction: "down",
      pauseonhover: false,
      responsive: true,
      clone: 10,
    });
  });
}
