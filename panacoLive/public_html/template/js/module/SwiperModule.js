
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
          delay: 6000,
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


  const spCt = document.querySelector(".sp_ct");
  if (spCt) {


    var swiperListImg = new Swiper(spCt.querySelector(".mySwiperListImg"), {
      slidesPerView: "auto",
      scrollbar: {
        el: spCt.querySelector(".swiper-scrollbar"),
        hide: false,
        draggable: true,
      },
    });

    var swiperSp = new Swiper(spCt.querySelector(".mySwiperSp"), {
      slidesPerView: "auto",
      speed: 800,
      navigation: {
        nextEl: spCt.querySelector(".next"),
        prevEl: spCt.querySelector(".prev"),
      },
      thumbs: {
        swiper: swiperListImg,
      },
    });



  }

  const why = document.querySelector(".why");
  if (why) {



    var swiperRt = new Swiper(why.querySelector(".mySwiperRt"), {
      effect: "coverflow",
      grabCursor: true,
      speed: 1000,
      slidesPerView: "auto",
      // loop:true,
      coverflowEffect: {
        rotate: 0,
        stretch: "100%",
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        460: {
          coverflowEffect: {
            rotate: 0,
            stretch: "94%",
            depth: 0,
            modifier: 1,
            slideShadows: false,
          },
        },
        1024: {
          coverflowEffect: {
            rotate: 0,
            stretch: "91%",
            depth: 0,
            modifier: 1,
            slideShadows: false,
          },
        }

      },
      navigation: {
        nextEl: why.querySelector(".next"),
        prevEl: why.querySelector(".prev"),
      }

    });

    swiperRt.on("slideChange", () => {
      const activeIndex = swiperRt.activeIndex;
      console.log(activeIndex);
      const whyLfItem = why.querySelectorAll(".why_lf--item");
      const whyLfItemActived = why.querySelector(".why_lf--item.actived");
      if (whyLfItemActived) {
        whyLfItemActived.classList.remove("actived")
      }
      whyLfItem[activeIndex].classList.add("actived")

    })

    const whyLfItem = why.querySelectorAll(".why_lf--item");
    whyLfItem.forEach((item, index) => {
      item.addEventListener("click", () => {
        const whyLfItemActived = why.querySelector(".why_lf--item.actived");
        if (whyLfItemActived) {
          whyLfItemActived.classList.remove("actived")
        }

        whyLfItem[index].classList.add("actived")
        swiperRt.slideTo(index)
      })
    })
  }


  const should = document.querySelector(".should");

  if (should) {
    if (window.screen.width > 1200) {
      let xOfset = 15;
      let yOfset = 15;
      var swiperShould = new Swiper(should.querySelector(".mySwiperShould"), {
        grabCursor: true,
        speed: 1000,
        effect: "creative",
        allowTouchMove: false,
        creativeEffect: {
          limitProgress: 3,
          perspective: true,

          prev: {
            opacity: 0,
            translate: [0, "10%", 1],
          },
          next: {
            translate: [xOfset, yOfset, -1],
          },
        },
      }
      );
    } else {

      var swiperShould = new Swiper(should.querySelector(".mySwiperShould"), {
        grabCursor: true,
        speed: 1000,
        effect: "fade",
        slidesPerView: "auto",
        allowTouchMove: false,
      }
      );
    }


    const should1s = should.querySelectorAll(".should1");

    should1s.forEach((should1, index) => {
      should1.addEventListener("click", () => {
        const should2s = should.querySelectorAll(".should2");



        const should1Ac = should.querySelector(".should1.actived");
        const should2Ac = should.querySelector(".should2.showed");


        should1Ac.classList.remove("actived");
        should2Ac.classList.remove("showed");

        should1.classList.add("actived");
        should2s[index].classList.add("showed");

        swiperShould.slideTo(index)



      })

    })
  }

  const homeNb = document.querySelector(".home_nb");
  if (homeNb) {
    var swiper = new Swiper(homeNb.querySelector(".mySwiper"), {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      allowTouchMove: false,
      speed: 1000,
      spaceBetween: 16,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false
      },
      breakpoints: {
        1000: {
          spaceBetween: 16,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 65,
            stretch: -20,
            depth: 400,
            modifier: 1,
            slideShadows: false
          },
        },
        1200: {
          spaceBetween: 32,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 70,
            stretch: -24,
            depth: 480,
            modifier: 1,
            slideShadows: false
          },
        }
      },
      navigation: {
        nextEl: homeNb.querySelector(".next"),
        prevEl: homeNb.querySelector(".prev"),
      },
      pagination: {
        el: homeNb.querySelector(".swiper-pagination"),
      },
    });
  }




}