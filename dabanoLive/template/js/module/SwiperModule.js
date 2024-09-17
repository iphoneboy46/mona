export default function SwiperModule() {
  // const eleFree = document.querySelectorAll(".free-slide");

  // if (eleFree) {
  //   eleFree.forEach((ele, i) => {
  //     var swiper2 = new Swiper(ele.querySelector(".swiper"), {
  //       slidesPerView: "auto",
  //       lazy: !0,
  //       pagination: {
  //         el: ele.querySelector(".swiper-pagination"),
  //         clickable: !0,
  //       },
  //       loop: ele.querySelector(".swiper").classList.contains("--loop"),
  //       centeredSlides: ele.querySelector(".swiper").classList.contains("--centerSlide"),

  //       navigation: {
  //         nextEl: ele.querySelector(".next"),
  //         prevEl: ele.querySelector(".prev"),
  //       },
  //       speed: 1000,
  //       autoplay: {
  //         delay: 5000,
  //         disableOnInteraction: false,
  //       },
  //     });
  //     if (!ele.querySelector(".swiper").classList.contains("--auto")) {
  //       swiper2.autoplay.stop();
  //     }
  //   });
  // }

  const bannerHome = document.querySelector(".banner-home");
  if (bannerHome) {
    var swiperBannerHome = new Swiper(".mySwiperHome", {
      grabCursor: true,
      slidesPerView: "auto",
      // loop:true,
      speed: 1200,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      // loop: true,
      parallax: true,
      lazy: !0,

    });


    swiperBannerHome.on("slideChange", () => {
      const activeIndex = swiperBannerHome.activeIndex;
      const btnHomeTabs = bannerHome.querySelectorAll(".banner-home-tab");
      const btnHomeTabActive = bannerHome.querySelector(".banner-home-tab.actived");

      btnHomeTabActive.classList.remove("actived");
      btnHomeTabs[activeIndex].classList.add("actived");

    })


    const btnHomeTabs = bannerHome.querySelectorAll(".banner-home-tab");
    btnHomeTabs.forEach((btnHomeTab, index) => {
      btnHomeTab.addEventListener("click", () => {
        const btnHomeTabActive = bannerHome.querySelector(".banner-home-tab.actived");
        btnHomeTabActive.classList.remove("actived");
        btnHomeTab.classList.add("actived");



        swiperBannerHome.slideTo(index)

      })
    })
  }

  const aboutBrand = document.querySelector(".about-brand");
  if (aboutBrand) {
    var swiper = new Swiper(aboutBrand.querySelector(".mySwiper"), {
      slidesPerView: "auto",
      centeredSlides: false,
      loop: false,
      speed: 1200,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: "auto",
          centeredSlides: true,
          speed: 1200,
          loop: true,
        },
      },
    });
  }

  const productCt = document.querySelector(".product-ct");
  if (productCt) {
    var swiperBottom = new Swiper(productCt.querySelector(".mySwiperBottom"), {
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
    });

    var swiperTop = new Swiper(productCt.querySelector(".mySwiperTop"), {
      slidesPerView: "auto",
      speed: 1200,
      navigation: {
        nextEl: productCt.querySelector(".next"),
        prevEl: productCt.querySelector(".prev"),
      },
      thumbs: {
        swiper: swiperBottom,
      },
    });
  }

  const aboutAt = document.querySelector(".about-at");
  if (aboutAt) {
    var swiperAboutAt = new Swiper(aboutAt.querySelector(".mySwiper"), {
      autoplay: {
        enabled: false,
      },
      navigation: {
        nextEl: aboutAt.querySelector(".next"),
        prevEl: aboutAt.querySelector(".prev"),
      },
      pagination: {
        el: aboutAt.querySelector(".swiper-pagination"),
        clickable: !0,
      },
      breakpoints: {
        280: {
          slidesPerView: "1",
          autoplay: {
            enabled: true,
            delay: 2500,
            disableOnInteraction: false,
          }
        },
        500: {
          slidesPerView: "2",
          autoplay: {
            enabled: false,
          },
        },
        767: {
          slidesPerView: "3",
          autoplay: {
            enabled: false,
          },
        },
      },
    });
  }

  const homeGrid = document.querySelector(".home-grid");
  if (homeGrid) {
    var swiperHomeGrid = new Swiper(homeGrid.querySelector(".mySwiper"), {
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: homeGrid.querySelector(".next"),
        prevEl: homeGrid.querySelector(".prev"),
      },
      pagination: {
        el: homeGrid.querySelector(".swiper-pagination"),
        clickable: !0,
      },
    })
  }

  const homeNews = document.querySelector(".home-news");
  if (homeNews) {
    var swiperHomeNews = new Swiper(homeNews.querySelector(".mySwiper"), {
      pagination: {
        el: homeNews.querySelector(".swiper-pagination"),
        clickable: !0,
      },
      breakpoints: {
        280: {
          slidesPerView: "2",
          slidesPerGroup: 1,
          navigation: {
            nextEl: homeNews.querySelector(".next"),
            prevEl: homeNews.querySelector(".prev"),
          },
        },
        767: {
          slidesPerView: "3",
          slidesPerGroup: 2,
        },
      },
    })
  }

  const homeSaleBottom = document.querySelector(".home-sale-bottom");
  if (homeSaleBottom) {
    var swiperHomeSaleBottom = new Swiper(homeSaleBottom.querySelector(".mySwiper"), {
      navigation: {
        nextEl: homeSaleBottom.querySelector(".next"),
        prevEl: homeSaleBottom.querySelector(".prev"),
      },
      breakpoints: {
        280: {
          slidesPerView: "1",
          navigation: {
            nextEl: homeNews.querySelector(".next"),
            prevEl: homeNews.querySelector(".prev"),
          },
        },
        375: {
          slidesPerView: "2",
        },
        500: {
          slidesPerView: "3",
        },
        767: {
          slidesPerView: "4",
        },
        992: {
          slidesPerView: "5",
        },
        1200: {
          slidesPerView: "6",
        },
      },
    })
  }

  const homeList = document.querySelector(".home-list");
  if (homeList) {
    var swiperHomeList = new Swiper(homeList.querySelector(".mySwiper"), {
      navigation: {
        nextEl: homeList.querySelector(".next"),
        prevEl: homeList.querySelector(".prev"),
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: homeList.querySelector(".swiper-pagination"),
        clickable: !0,
      },
      breakpoints: {
        280: {
          slidesPerView: "1",
        },
        375: {
          slidesPerView: "2",
        },
        500: {
          slidesPerView: "3",
        },
        768: {
          slidesPerView: "4",
        },
        992: {
          slidesPerView: "5",
        },
        1200: {
          slidesPerView: "6",
        },

      },
    })
  }


  const homeProduct = document.querySelector(".home-product");
  if (homeProduct) {
    var swiperhomeProduct = new Swiper(homeProduct.querySelector(".mySwiper"), {
      navigation: {
        nextEl: homeProduct.querySelector(".next"),
        prevEl: homeProduct.querySelector(".prev"),
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        375: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          slidesPerColumns: 2,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    })
  }


  const homeProductPk = document.querySelector(".home-product.pk");
  if (homeProductPk) {
    var swiperhomeProductPk = new Swiper(homeProductPk.querySelector(".mySwiper"), {
      navigation: {
        nextEl: homeProductPk.querySelector(".next"),
        prevEl: homeProductPk.querySelector(".prev"),
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        375: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          slidesPerColumns: 2,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    })
  }

  const productList = document.querySelector(".product-list");
  if (productList) {
    var swiperproductList = new Swiper(productList.querySelector(".mySwiper"), {
      navigation: {
        nextEl: productList.querySelector(".next"),
        prevEl: productList.querySelector(".prev"),
      },
      pagination: {
        el: productList.querySelector(".swiper-pagination"),
        clickable: !0,
      },
      breakpoints: {
        280: {
          slidesPerView: "1",
        },
        375: {
          slidesPerView: "2",
        },
        500: {
          slidesPerView: "3",
        },
        768: {
          slidesPerView: "4",
        },
        1200: {
          slidesPerView: "5",
          slidesPerGroup: 3,
          pagination: {
            el: productList.querySelector(".swiper-pagination"),
            clickable: !0,
          },
        },
      },
    })
  }

  const postLq = document.querySelector(".post-lq");
  if (postLq) {
    var swiperpostLq = new Swiper(postLq.querySelector(".mySwiper"), {
      navigation: {
        nextEl: postLq.querySelector(".next"),
        prevEl: postLq.querySelector(".prev"),
      },
      pagination: {
        el: postLq.querySelector(".swiper-pagination"),
        clickable: !0,
      },
      speed: 1000,
      slidesPerGroup: 3,
      breakpoints: {
        280: {
          slidesPerView: "1",
        },
        375: {
          slidesPerView: "2",
        },
        768: {
          slidesPerView: "3",
        },

      },
    })
  }
}
