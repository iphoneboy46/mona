export default function Counter() {
  if ($(".js-count").length) {
    var a = 0;
    $(window).on('load', function () {
      var oTop = $("#counter-box").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".js-count").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text()
          }).animate(
            {
              countNum: countTo
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                // Check if the value is less than 10
                var currentValue = Math.ceil(this.countNum);
                var formattedValue = currentValue < 10 ? currentValue : currentValue;
                $this.text(formattedValue);
              },
              complete: function () {
                // Ensure the final value is properly formatted
                var finalValue = Math.ceil(this.countNum);
                $this.text(finalValue < 10 ? finalValue : finalValue);
              }
            }
          );
        });
        a = 1;
      }
    });
  }
  
}
