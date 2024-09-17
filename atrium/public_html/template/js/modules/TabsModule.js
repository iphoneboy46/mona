export default function TabsModule() {
  const tabs = $(".tabs");
  if (tabs.length > 0) {
    tabs.each(function () {
      const $this = $(this);
      const panels = $this.find(".tabs-panel");
      const contents = $this.find(".tabs-content");

      panels.on("click", function (e) {
        e.preventDefault();
        panels.removeClass("active");
        $(this).addClass("active");
        // contents.removeClass("active");
        contents.hide();
        // contents.eq($(this).index()).addClass("active");
        contents.eq($(this).index()).fadeIn(600);
      });
    });
  }
}
