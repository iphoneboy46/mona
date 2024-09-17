export default function EditField() {
  const blockEdit = $(".block-edit");

  blockEdit.each(function () {
    const btnChange = $(this).find(".block-edit-change");
    console.log(btnChange);
    // const buttonBlock = $(this).find(".block-edit-button");
    const inputs = $(this).find("input[readonly]");
    const selects = $(this).find("select[disabled]");

    btnChange.on("click", function (e) {
      e.preventDefault();
      console.log($(this).closest("form"));
      // buttonBlock.addClass("active");
      // $(this).closest("form").addClass("edit");
      inputs.each(function () {
        inputs[0].focus();
        inputs[0].select();
        $(this).removeAttr("readonly");
      });
      selects.each(function () {
        $(this).removeAttr("disabled");
      });
    });
  });
}
