export default function HeaderDropdown() {
  const tgLang = $(".header_lang .lang-select");

  if (tgLang) {
    tgLang.on("click", function () {
      $(this).next().slideToggle(500);
    });
    $(document).mouseup(function (e) {
      if (!tgLang.is(e.target) && tgLang.has(e.target).length === 0) {
        tgLang.next().slideUp(500);
      }
    });
  }
  const tgAccount = $(".header_account .icon");

  if (tgAccount) {
    tgAccount.on("click", function () {
      $(this).next().slideToggle(500);
    });
    $(document).mouseup(function (e) {
      if (!tgAccount.is(e.target) && tgAccount.has(e.target).length === 0) {
        tgAccount.next().slideUp(500);
      }
    });
  }
}
