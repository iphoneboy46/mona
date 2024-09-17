
export default function SwiperModule() {
  const eleFree = document.querySelectorAll(".free-slide");

  if (eleFree) {
    eleFree.forEach((ele, i) => {
      var swiper2 = new Swiper(ele.querySelector(".swiper"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
          el: ele.querySelector(".swiper-pagination"),
          clickable: !0,
        },
        centeredSlides: ele.querySelector(".swiper").classList.contains("--center"),
        loop: ele.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele.querySelector(".next"),
          prevEl: ele.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
      if (!ele.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
    });
  }

  const eleFree2 = document.querySelectorAll(".free-slide2");

  if (eleFree2) {
    eleFree2.forEach((ele2, i) => {
      var swiper2 = new Swiper(ele2.querySelector(".swiper"), {
        slidesPerView: "auto",
        lazy: !0,
        // pagination: {
        //   el: ele2.querySelector(".swiper-pagination"),
        //   clickable: !0,
        //   type: "progressbar",
        // },
        scrollbar: {
          el: ele2.querySelector(".swiper-scrollbar"),
          hide: false,
          draggable: true,
        },
        centeredSlides: ele2.querySelector(".swiper").classList.contains("--center"),
        loop: ele2.querySelector(".swiper").classList.contains("--loop"),
        navigation: {
          nextEl: ele2.querySelector(".next"),
          prevEl: ele2.querySelector(".prev"),
        },
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
      if (!ele2.querySelector(".swiper").classList.contains("--auto")) {
        swiper2.autoplay.stop();
      }
    });
  }



  const ser = document.querySelector(".ser_list");
  if (ser) {
    var swiper = new Swiper(ser.querySelector(".mySwiper"), {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      spaceBetween: 8,
      slidesPerView: 1.25,
      navigation: {
        nextEl: ser.querySelector(".next"),
        prevEl: ser.querySelector(".prev"),
      },
      // coverflowEffect: {
      //   rotate:180,
      //   stretch:0,
      //   depth: 350,
      //   modifier: 0.20,
      //   slideShadows: false,
      // },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      },
      breakpoints: {
        360:{
          slidesPerView: 1.5,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          },
        },
        500:{
          slidesPerView: 2.1,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          },
        },
        600:{
          slidesPerView: 2.3,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          },
        },
        1200:{
          slidesPerView: 3,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          },
        },
        2000: {
          slidesPerView: 3.5,
          spaceBetween: 10,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          },
        },
      },
      on: {
        init: function () {
          const activeIndexs = this.activeIndex;
          console.log(activeIndexs);
          const swiperSlides = ser.querySelectorAll(".swiper-slide");
          swiperSlides[activeIndexs - 3].classList.add("slide-custom");
          swiperSlides[activeIndexs - 4].classList.add("slide-custom2");
        }
      },
      on: {
        slideChange: function () {
          const activeIndexs = this.activeIndex;
          const swiperSlides = ser.querySelectorAll(".swiper-slide");
          swiperSlides.forEach((swiperSlide, index) => {
            const swiperSlideCustom = ser.querySelector(".swiper-slide.slide-custom")
            if (swiperSlideCustom) {
              swiperSlideCustom.classList.remove("slide-custom");

            }

            const swiperSlideCustom2 = ser.querySelector(".swiper-slide.slide-custom2")
            if (swiperSlideCustom2) {
              swiperSlideCustom2.classList.remove("slide-custom2");

            }

            if (swiperSlides[activeIndexs - 3]) {
              $(swiperSlides[activeIndexs - 3]).addClass("slide-custom")
            }

            if (swiperSlides[activeIndexs - 4]) {
             
              $(swiperSlides[activeIndexs - 4]).addClass("slide-custom2")

            }
          })
        }
      }

    });



  }

  const items = document.querySelectorAll(".home_across--rt-item")
  if (items) {
    items.forEach((item, i) => {
      var swiperImg = new Swiper(item.querySelector(".mySwiperImgs "), {
        slidesPerView: "auto",
        speed: 1000,
        effect: "fade",
        fadeEffect: {
          crossFade: true // Bật hiệu ứng crossfade
        },
      });

      var swiperBox = new Swiper(item.querySelector(".mySwiperBoxs "), {
        slidesPerView: "auto",
        speed: 1000,
        navigation: {
          nextEl: item.querySelector(".next"),
          prevEl: item.querySelector(".prev"),
        },
      });

      swiperImg.controller.control = swiperBox;
      swiperBox.controller.control = swiperImg;

    })
  }


}