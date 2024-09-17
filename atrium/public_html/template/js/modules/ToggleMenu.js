export default function ToggleMenu() {
  // const tgMenu = $(".tg-menu");
  // const closeMenu = $(".close-menu");
  // const menuOverlay = $(".menu-overlay");
  // if (tgMenu) {
  //   tgMenu.on("click", function () {
  //     $(".menu-side").toggleClass("active");
  //     menuOverlay.toggleClass("active");
  //     $("body").toggleClass("menu-is-show");
  //   });
  // }
  // function hideMenu() {
  //   $(".menu-side").removeClass("active");
  //   $("body").removeClass("menu-is-show");
  //   menuOverlay.removeClass("active");
  // }
  // if (closeMenu) {
  //   closeMenu.on("click", function () {
  //     hideMenu();
  //   });
  // }

  // const tgSub = $(".menu-list > .menu-item > .tg-submenu");
  // const tgSubInner = $(".submenu .tg-submenu");
  // if (tgSub) {
  //   tgSub.on("click", function () {
  //     $(this).next().toggleClass("active");
  //   });
  // }
  // if (tgSubInner) {
  //   tgSubInner.on("click", function () {
  //     $(this).next().slideUp(500);
  //     $(this).closest(".menu-item").removeClass("active");
  //     if ($(this).next().css("display") == "none") {
  //       $(this).next().slideDown(500);
  //       $(this).closest(".menu-item").addClass("active");
  //       $(this).closest(".menu-item").nextAll().find(".submenu").slideUp(500);
  //       $(this).closest(".menu-item").prevAll().find(".submenu").slideUp(500);
  //     }
  //   });
  // }

  // $(document).mouseup(function (e) {
  //   if (
  //     !tgMenu.is(e.target) &&
  //     tgMenu.has(e.target).length === 0 &&
  //     $(".menu-side-main").has(e.target).length === 0
  //   ) {
  //     hideMenu();
  //   }
  // });

  // if ($(window).width() <= 880) {
  //   tgSub.on("click", function () {
  //     $(this).next().slideToggle(500);
  //   });
  // }
}
