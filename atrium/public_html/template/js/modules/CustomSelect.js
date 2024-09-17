export default function CustomSelect() {
  const select = $(".select-box");
  const selectOptions = $(".select-options");
  const btnReset = $(".reset-form");

  if (select) {
    select.each(function () {
      let $this = $(this);
      let current = $this.find(".select-current");
      let currentText = $this.find(".select-current .text-current");
      let currentTextInner = $this.find(".select-current .text-current").text();
      let options = $this.find(".select-options");
      let optionLabel = $this.find(".opt-label");
      let optionInput = $this.find(".opt-input");

      // thay đổi text placeholder nếu có input checked
      // optionInput.each(function () {
      //   if ($(this).is(":checked")) {
      //     currentText.text($(this).val());
      //   }
      // });

      // collapse options
      current.on("click", function () {
        selectOptions.slideUp(400);
        $(".select-current").removeClass("active");
        if ($(this).next().css("display") == "none") {
          $(this).next().slideDown(400);
          $(this).addClass("active");
        }
      });

      // thay đổi text placeholder khi click option
      optionLabel.on("click", function () {
        options.slideUp(400);
        current.removeClass("active");
        // currentText.text($(this).find(".opt-input").val());
      });

      if (btnReset) {
        btnReset.on("click", function () {
          currentText.text(currentTextInner);
        });
      }
      // collapse options khi click ra ngoài
      $(document).on("click", function (e) {
        if ($(e.target).closest(".select-box").length === 0) {
          selectOptions.slideUp(400);
          current.removeClass("active");
        }
      });
    });
  }

  // $(".network__sort form").submit(function (e) {
  //   e.preventDefault();
  //   var input = $(".network__sort form input:checked").val();
  //   alert(input);
  // });
}
