export default function SwiperModule() {
  const swRelatedPosts = new Swiper(".related_posts .swiper", {
    speed: 800,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    // If we need pagination
    pagination: {
      el: ".related_posts .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      375: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
  const swRelatedProduct = new Swiper(".related_product .swiper", {
    speed: 800,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    // If we need pagination
    pagination: {
      el: ".related_product .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      375: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });

  const cateSlider = document.querySelectorAll(".cate-list_slider");

  if (cateSlider) {
    cateSlider.forEach((item) => {
      const swiper = item.querySelector(".swiper"),
        prev = item.querySelector(".swiper-button-prev"),
        next = item.querySelector(".swiper-button-next"),
        pagination = item.querySelector(".swiper-pagination");
      const swSlider = new Swiper(swiper, {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 10,

        autoplay: {
          delay: 5000,
        },

        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      });
    });
  }

  const swProductNav = new Swiper(
    ".product-detail_slider .slider-nav .swiper",
    {
      spaceBetween: 24,
      slidesPerView: 3,
      watchSlidesProgress: true,
    }
  );
  const swProductMain = new Swiper(
    ".product-detail_slider .slider-main .swiper",
    {
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: swProductNav,
      },
    }
  );
  const swHistory = new Swiper(".history_main .swiper", {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: {
      delay: 5000,
    },
  });
  const swTeam = new Swiper(".team_images .swiper", {
    slidesPerView: 2,
    spaceBetween: 24,
    autoplay: {
      delay: 5000,
    },
  });
}
