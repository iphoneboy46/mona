export default function ScrollModule() {
  const w = $(window).width();
  const fullpages = $(".homepage-scroll");

  Splitting({
    target: "[data-splitting]",
    by: "chars",
    key: null,
  });
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 3)),
  });
  if (fullpages.length > 0) {
    lenis.destroy();
  }
  if (w < 768) {
    lenis.destroy();
  }
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // PARALLAX
  const prlScroll = gsap.utils.toArray(".prl-scroll"),
    getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);
  if (prlScroll && w >= 992) {
    prlScroll.forEach((item, i) => {
      let bg = item.querySelector("img"),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

      tl.fromTo(
        bg,
        {
          y: () => (i ? -window.innerHeight * getRatio(item) : 0),
        },
        {
          y: () => window.innerHeight * (1 - getRatio(item)),
          ease: "none",
        }
      );
    });
  }

  // parallax2
  let prl = $(".prl-scroll-2 img");
  if (prl.length > 0 && $(window).width() > 992) {
    prl.each(function () {
      let $this = $(this);
      let n = $this.outerHeight() - $this.parent().outerHeight();
      gsap.fromTo(
        $this,
        { y: -n * 1.4 },
        {
          scrollTrigger: {
            trigger: $this.parent(),
            scrub: !0,
          },
          y: 0,
          ease: "none",
        }
      );
    });
  }

  // IMAGE LOAD
  const imageLoad = gsap.utils.toArray(".image-load");
  if (imageLoad && w >= 992) {
    imageLoad.forEach((img) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top-=40% center",
        },
      });
      const imgInner = img.querySelector("img");
      tl.to(img, 2.5, {
        clipPath: "inset(0 0% 0 0)",
        ease: Power4.easeOut,
      }).to(
        imgInner,
        4,
        {
          scale: 1,
          ease: Power4.easeOut,
          opacity: 1,
        },
        "-=2.2"
      );
    });
  }

  // scroll y
  const scrollY = $(".scroll-y");

  if (scrollY && w >= 1200) {
    scrollY.each(function () {
      gsap.to($(this), {
        yPercent: -10,
        // ease: Power4.easeOut,
        scrollTrigger: {
          trigger: $(this).closest(".scroll-y-block"),
          start: "-100 center",
          end: "bottom center",
          scrub: 2,
        },
      });
    });
  }

  // TEXT SLIDE UP
  const tSlideUp = gsap.utils.toArray(".t-slide-up");

  if (tSlideUp && w >= 1200) {
    tSlideUp.forEach((text) => {
      const char = text.querySelectorAll(".char");
      gsap.to(char, 1, {
        y: 0,
        ease: Power4.easeOut,
        stagger: 0.05,
        scrollTrigger: {
          trigger: text,
          start: "-100 center",
        },
      });
    });
  }

  // text slide style 2
  const tSlide2 = gsap.utils.toArray(".t-slide-2");
  if (tSlide2 && w >= 1200) {
    tSlide2.forEach((t) => {
      const char = t.querySelectorAll(".char");
      gsap.fromTo(
        char,
        {
          "will-change": "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          duration: 1.5,
          ease: Power4.easeOut,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: t,
            start: "center bottom+=50%",
          },
        }
      );
    });
  }

  // fade up
  const fadeUp = gsap.utils.toArray(".fade-up");

  if (fadeUp && w >= 768) {
    fadeUp.forEach((item) => {
      gsap.to(item, 2, {
        opacity: 1,
        y: 0,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: item,
          start: "top-=200 center",
        },
      });
    });
  }

  const texttHoriz = gsap.utils.toArray(".text-horiz-wrap");

  if (texttHoriz && w >= 1200) {
    texttHoriz.forEach((item) => {
      const t = item.querySelector(".text-head"),
        b = item.querySelector(".text-bot");

      gsap.to(t, 3, {
        x: "0%",
        opacity: 1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: item,
          start: "top-=20% top",
          end: "center-=20% top",
          scrub: 3,
        },
      });
      gsap.to(b, 3, {
        x: "0%",
        opacity: 1,
        ease: Power4.easeOut,
        scrollTrigger: {
          trigger: item,
          start: "top-=20% top",
          end: "center-=20%  top",
          scrub: 3,
        },
      });
    });
  }

  // sticky header

  let header = document.querySelector(".header");

  // CURVE OVERLAY
  const curveOverlay = gsap.utils.toArray(".curve-overlay");

  if (curveOverlay) {
    curveOverlay.forEach((item) => {
      let path = item.querySelector(".curve-path");
      let tlCurve = gsap.timeline({
        yoyo: true,
        scrollTrigger: {
          trigger: item,
          start: "top center",
        },
      });
      tlCurve
        .to(path, {
          duration: 1,
          attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
          ease: "power2.easeIn",
        })
        .to(path, {
          duration: 1,
          attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
          ease: "power2.easeIn",
        });
    });
  }

  // toggle search
  const btnSearch = $(".tg-search");
  let tlSearch = gsap.timeline();
  let start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  let end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";
  tlSearch.pause();
  let headerHome = $(".header--home");
  function hideSearch() {
    $(".search-screen").removeClass("active");
    $("body").removeClass("search-is-show");
    btnSearch.removeClass("active");
    lenis.start();
    tlSearch.timeScale(2).reverse();
  }
  if (headerHome) {
    tlSearch.to(headerHome, 0.1, {
      backgroundColor: "#0b0b0b",
    });
  }
  tlSearch
    .to(".search-screen", 0.1, {
      pointerEvents: "auto",
    })
    .to(".search-overlay", {
      opacity: 1,
    })
    .to(
      ".search-overlay path",
      {
        duration: 1,
        attr: { d: start },
        ease: "power2.easeIn",
      },
      "--=0.1"
    )
    .to(".search-overlay path", {
      duration: 1,
      attr: { d: end },
      ease: "power2.easeIn",
    });
  if (btnSearch) {
    btnSearch.on("click", function (e) {
      // e.preventDefault();
      if (!btnSearch.hasClass("active")) {
        $(".search-screen").addClass("active");
        $("body").addClass("search-is-show");
        $(this).addClass("active");
        lenis.stop();
        tlSearch.timeScale(1).play();
        setTimeout(() => {
          $(".search-screen_form .form-ctr").focus();
        }, 2200);
      } else {
        hideSearch();
      }
    });
    // POPUP
    const btnPopup = $(".btn-popup");
    const closePopup = $(".popup-close");

    if (btnPopup) {
      btnPopup.on("click", function (e) {
        e.preventDefault();
        $(`.popup#${$(this).data("popup")}`).addClass("is-show");
        $("body").addClass("popup-is-show");
        lenis.stop();
      });
    }
    if (closePopup) {
      closePopup.on("click", function () {
        hideModal();
      });
    }
    function hideModal() {
      $(".popup").removeClass("is-show");
      $("body").removeClass("popup-is-show");
      lenis.start();
    }
    $(document).mouseup(function (e) {
      if (
        !btnPopup.is(e.target) &&
        btnPopup.has(e.target).length === 0 &&
        !$(".popup-content").is(e.target) &&
        $(".popup-content").has(e.target).length === 0
      ) {
        hideModal();
      }
    });
  }

  //  TOGGLE MENU
  const tgMenu = $(".tg-menu");
  const closeMenu = $(".close-menu");
  const menuOverlay = $(".menu-overlay");
  function showMenu() {
    $(".menu-side").toggleClass("active");
    menuOverlay.toggleClass("active");
    $("body").toggleClass("menu-is-show");
  }
  if (tgMenu) {
    tgMenu.on("click", function () {
      if ($("body").hasClass("search-is-show")) {
        hideSearch();
      }
      if ($("body").hasClass("menu-is-show")) {
        lenis.start();
        showMenu();
      } else {
        showMenu();
        lenis.stop();
      }
    });
  }
  function hideMenu() {
    $(".menu-side").removeClass("active");
    $("body").removeClass("menu-is-show");
    menuOverlay.removeClass("active");
    lenis.start();
  }
  if (closeMenu) {
    closeMenu.on("click", function () {
      hideMenu();
    });
  }

  const tgSub = $(".menu-list > .menu-item.dropdown > .menu-link");
  const tgSubInner = $(".submenu .menu-item.dropdown >  .menu-link");
  if (tgSub) {
    tgSub.on("click", function (e) {
      e.preventDefault();
      $(this).next().toggleClass("active");
    });
  }
  if (tgSubInner) {
    tgSubInner.on("click", function (e) {
      e.preventDefault();

      $(this).next().slideUp(500);
      $(this).closest(".menu-item").removeClass("active");
      if ($(this).next().css("display") == "none") {
        $(this).next().slideDown(500);
        $(this).closest(".menu-item").addClass("active");
        $(this).closest(".menu-item").nextAll().find(".submenu").slideUp(500);
        $(this).closest(".menu-item").prevAll().find(".submenu").slideUp(500);
      }
    });
  }

  $(document).mouseup(function (e) {
    if (
      !$("body").hasClass("search-is-show") &&
      !tgMenu.is(e.target) &&
      tgMenu.has(e.target).length === 0 &&
      $(".menu-side-main").has(e.target).length === 0
    ) {
      hideMenu();
    }
    // if ($("body").hasClass("search-is-show")) {
    //   hideSearch();
    // }
  });

  if ($(window).width() <= 880) {
    tgSub.on("click", function () {
      $(this).next().slideToggle(500);
    });
  }

  // $(document).mouseup(function (e) {
  //   if (
  //     btnSearch.hasClass("active") &&
  //     !$("body").hasClass("menu-is-show") &&
  //     !$(".search-screen").is(e.target) &&
  //     $(".search-screen").has(e.target).length === 0
  //   ) {
  //     hideSearch();
  //   }
  // });
}
