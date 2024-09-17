export default function ViewCartModule() {
  $(document).ready(function () {
    // Decrease quantity logic
    $(document).on("click", ".minus-btn", function () {
      var row = $(this).closest(".product-quantity");
      var quantityInput = row.find(".input-update-count");
      var quantity = parseInt(quantityInput.val());

      if (quantity > 1) {
        quantityInput.val(quantity - 1);
      }
    });

    // Increase quantity logic
    $(document).on("click", ".plus-btn", function () {
      var row = $(this).closest(".product-quantity");
      var quantityInput = row.find(".input-update-count");
      var quantity = parseInt(quantityInput.val());

      quantityInput.val(quantity + 1);
    });

    // Setting modal fade duration
    $.modal.defaults.fadeDuration = 300;
  });
}