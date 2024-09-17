export default function TogglePassword() {
  const togglePw = $(".seepassJS");

  if (togglePw) {
    togglePw.each(function () {
      let $this = $(this);

      $this.on("click", function () {
        const pw = $(this).closest(".form-field").find("input");
        const type = pw.attr("type") === "password" ? "text" : "password";
        pw.attr("type", type);
        // $(this).toggleClass("fa-eye-slash");
        $(this).toggleClass("active");
      });
    });
  }
}
