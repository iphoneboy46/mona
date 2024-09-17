export default function ShowModalLogin() {
  const modalLogin = $(".modal-login");
  const btnSend = $(".ask-ques").children().find(".ask-ques-form > .btn:not(.btn.btn-see-more)");
  btnSend.on("click", function (e) {
    e.preventDefault();
    // modalLogin.fadeIn(400);
    modalLogin.addClass("show-modal")
    $(".overlay").addClass("active-show");
  });
  $(".overlay").click(function () {
    // modalLogin.fadeOut(400);
    modalLogin.removeClass("show-modal")
    $(this).removeClass("active-show");
  });

  const btnpopupEvalute = $(".btn-popup-login-evalute");
  btnpopupEvalute.on("click", function (e) {
    e.preventDefault();
    // modalLogin.fadeIn(400);
    modalLogin.addClass("show-modal")
    $(".overlay").addClass("active-show");
  });
  $(".overlay").click(function () {
    // modalLogin.fadeOut(400);
    modalLogin.removeClass("show-modal")
    $(this).removeClass("active-show");
  });
}
