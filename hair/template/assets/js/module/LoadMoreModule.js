export default function LoadMoreModule() {
  $(window).ready(function() {
  const $container = $(".js-load-more");
  const $listItem = $container.find(".js-load-list").children("li");
  const $progress = $container.find(".js-load-progress");
  const $btn = $container.find(".js-load-btn");
  let currentItem = 9;
  const $text = $container.find(".js-load-text");

  const renderHtml = () => {
    $listItem.each((index, item) => {
      if (index < currentItem) {
        $(item).css({ display: "block" });
      }
    });

    $text.html(
      `You’re viewed ${
        currentItem >= $listItem.length ? $listItem.length : currentItem
      } of ${$listItem.length} products`
    );

    $progress.css({
      width:
        currentItem >= $listItem.length
          ? "100%"
          : `${(currentItem / $listItem.length) * 100}%`,
    });

    if (currentItem >= $listItem.length) {
      $btn.css({ display: "none" });
    }
  };

  renderHtml();

  $btn.on("click", (e) => {
    e.preventDefault();
    currentItem += 9;
    renderHtml();
  
    $btn.on("click", (e) => {
      e.preventDefault();
      currentItem += 9;
      renderHtml();
    });
  })
})
}
