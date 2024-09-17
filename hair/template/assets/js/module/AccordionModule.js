export default function Accordion() {
  $(".js-accordion").each(function () {
    const $this = $(this);
    $this.on("click", ".accordion_heading", () => {
      $this.stop().toggleClass("is-active");
      $this.find(".accordion_content").stop().slideToggle();
    });
  });
}
