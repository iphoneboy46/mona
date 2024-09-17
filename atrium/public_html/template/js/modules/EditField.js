export default function EditField() {
  const blockEdit = $(".block-edit");

  blockEdit.each(function () {
    const btnChange = $(this).find(".block-edit-change");
    const inputs = $(this).find("input[readonly]");
    const selects = $(this).find("select[disabled]");

    btnChange.on("click", function (e) {
      e.preventDefault();
      // $(this).closest(".block-edit").toggleClass("is-edit");
      // inputs.each(function () {
      //   inputs[0].focus();
      //   inputs[0].select();
      //   $(this).removeAttr("readonly");
      // });
      // selects.each(function () {
      //   $(this).removeAttr("disabled");
      // });
      if (!$(this).closest(".block-edit").hasClass("is-edit")) {
        $(this).closest(".block-edit").addClass("is-edit");

        inputs.each(function () {
          inputs[0].focus();
          inputs[0].select();
          $(this).removeAttr("readonly");
        });
        selects.each(function () {
          $(this).removeAttr("disabled");
        });
      } else {
        $(this).closest(".block-edit").removeClass("is-edit");

        inputs.each(function () {
          // inputs[0].focusout();
          // inputs[0].select();
          $(this).attr("readonly", true);
        });
        selects.each(function () {
          $(this).attr("disabled");
        });
      }
    });
  });
}
