export default function MenuHeader() {
  const btnMenu = $(".js-btn-menu");
  const headerSearch = $(".js-header-search");

  const isDesktop = window.matchMedia("(min-width: 767px)").matches;

  btnMenu.click((e) => {
    const currentTarget = $(e.currentTarget);
    $(".js-sub-menu").removeClass("is-show");

    currentTarget.toggleClass("is-active");
    $(".js-menu").toggleClass("is-open");
    $(".overlay").toggleClass("is-open");

    if (currentTarget.hasClass("is-active")) {
      $(".main").off("touchmove");
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "unset");
    }
  });

  $(".js-header-search").on("click", (e) => {
    $(e.currentTarget).addClass("is-active");
  });

  $(window).on("click", (e) => {
    if (
      !$(e.target).hasClass("header_search") &&
      !$(e.target).parents(".header_search").hasClass("header_search")
    ) {
      $(".js-header-search").removeClass("is-active");
    }
  });

  var header = $(".m-header");
  var headerHeight = header.height();

  $(window).scroll(function () {
    var lastScrollTop = $(".m-header_top").outerHeight();
    var fixHeight = $(".m-header_main").outerHeight();
    var scrollTop = $(this).scrollTop();
    header.toggleClass("is-sticky", scrollTop > lastScrollTop);
    if (header.hasClass("is-sticky")) {
      header.css("padding-bottom", fixHeight);
    } else {
      header.css("padding-bottom", "auto");
    }
  });

  $(".js-acorrdion-menu").on("click", (e) => {
    const subMenu = $(e.currentTarget).next(".js-sub-menu");
    subMenu.addClass("is-show");
  });

  $(".js-btn-back").on("click", (e) => {
    $(".js-sub-menu").removeClass("is-show");
  });

  $(".detail_list li").on("mouseenter", (e) => {
    if (!isDesktop) {
      return;
    }

    const currentTarget = $(e.currentTarget);
    const content = currentTarget.find(".sub-menu");
    content.stop().slideDown();
    currentTarget.addClass('is-active');
  });

  $(".detail_list li").on("mouseleave", (e) => {
    if (!isDesktop) {
      return;
    }
    const currentTarget = $(e.currentTarget);
    const content = currentTarget.find(".sub-menu");
    content.stop().slideUp();
    currentTarget.removeClass('is-active');
  });

  $(".detail_list li").on("click", ".js-acorrdion-menu", (e) => {
    if (isDesktop) {
      return;
    }
    const currentTarget = $(e.currentTarget);
    const parent = currentTarget.parent("li");
    const content = parent.find(".sub-menu");
    content.stop().slideToggle();
    currentTarget.toggleClass('is-active');
  });
}
