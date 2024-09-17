
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

  const productCt = document.querySelector(".product_ct");
  if (productCt) {
    const productCtLf = productCt.querySelector(".product_ct--lf");
    const productCtRt = productCt.querySelector(".product_ct--rt");

    if (window.screen.width > 600 && window.screen.width < 1200) {
      var swiperRt = new Swiper(productCt.querySelector(".mySwiperRt"), {
        speed: 1000,
        slidesPerView: "auto",
        // loop:true,
        scrollbar: {
          el: productCtRt.querySelector(".swiper-scrollbar"),
          hide: false,
          draggable: true,
        },
      });

      var swiperLf = new Swiper(productCt.querySelector(".mySwiperLf"), {
        speed: 1000,
        slidesPerView: "auto",
        effect: "fade",
        // loop:true,
        allowTouchMove: true,
        navigation: {
          nextEl: productCt.querySelector(".next"),
          prevEl: productCt.querySelector(".prev"),
        },
        fadeEffect: { crossFade: true },
        thumbs: {
          swiper: swiperRt,
        },

      })

    } else if (window.screen.width > 600) {
      console.log("Ádasad");
      var swiperRt = new Swiper(productCt.querySelector(".mySwiperRt"), {
        speed: 1000,
        slidesPerView: "auto",
        // loop:true,
        scrollbar: {
          el: productCtRt.querySelector(".swiper-scrollbar"),
          hide: false,
          draggable: true,
        },
      });

      var swiperLf = new Swiper(productCt.querySelector(".mySwiperLf"), {
        speed: 1000,
        slidesPerView: "auto",
        effect: "fade",
        // loop:true,
        allowTouchMove: false,
        navigation: {
          nextEl: productCt.querySelector(".next"),
          prevEl: productCt.querySelector(".prev"),
        },
        fadeEffect: { crossFade: true },
        thumbs: {
          swiper: swiperRt,
        },

      })
    } else {
      var swiperLfMb = new Swiper(productCt.querySelector(".mySwiperLfMb"), {
        // loop:true,
        speed: 1000,
        slidesPerView: "auto",
        scrollbar: {
          el: productCtLf.querySelector(".swiper-scrollbar"),
          hide: false,
          draggable: true,
        },
      });
      var swiperLf = new Swiper(productCt.querySelector(".mySwiperLf"), {
        speed: 1000,
        // loop:true,
        slidesPerView: "auto",
        effect: "fade",
        allowTouchMove: true,
        navigation: {
          nextEl: productCt.querySelector(".next"),
          prevEl: productCt.querySelector(".prev"),
        },
        fadeEffect: { crossFade: true },
        thumbs: {
          swiper: swiperLfMb,
        },
      });

    }

  }

  const qt = document.querySelector(".qt")
  if (qt) {
    var swiperQt = new Swiper(qt.querySelector('.mySwiperImg'), {
      slidesPerView: 1,
      direction: "vertical",
      speed: 800,
      mousewheel: true,
      scrollbar: {
        el: qt.querySelector(".swiper-scrollbar"),
        hide: false,
        draggable: true,
      },
      allowTouchMove: true,

      breakpoints: {
        1200: {
          slidesPerView: 1,
          direction: "vertical",
          speed: 800,
          // mousewheel: true,
          scrollbar: {
            el: qt.querySelector(".swiper-scrollbar"),
            hide: false,
            draggable: true,
          },
          allowTouchMove: true,
        },

      },
    });

    swiperQt.on("slideChange", () => {
      const activeIndex = swiperQt.activeIndex;
      const imgActive = qt.querySelector(".qt_item.actived");
      const imgs = qt.querySelectorAll(".qt_item");
      const contents = qt.querySelectorAll(".qt_item--content");

      if (imgActive) {
        imgActive.classList.remove("actived");
      }



      imgs[activeIndex].classList.add("actived");


    })
  }

}