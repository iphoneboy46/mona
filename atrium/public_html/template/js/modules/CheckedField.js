export default function CheckedField() {
  $(window).ready(function () {
    const field = $(".field-js");
    if (field) {
      field.each(function () {
        const fieldInput = $(this).find(".form-ctr");
        if (fieldInput.val()) {
          fieldInput.parent().addClass("checked");
        }
      });
      field.focusin(function () {
        $(this).addClass("checked");
      });
      field.focusout(function () {
        const fieldInput = $(this).find(".form-ctr");
        if (fieldInput.val()) {
          return;
        } else {
          $(this).removeClass("checked");
        }
      });
    }
  });
}
