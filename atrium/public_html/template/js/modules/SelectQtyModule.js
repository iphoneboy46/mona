export default function SelectQtyModule() {
  const qtyBlock = document.querySelectorAll(".select-qty-js");

  if (qtyBlock) {
    qtyBlock.forEach((item) => {
      const minus = item.querySelector(".minus");
      const plus = item.querySelector(".plus");
      const count = item.querySelector(".count");

      minus.addEventListener("click", () => {
        count.value--;
        if (count.value < 10) {
          count.value = count.value;
        }
        if (count.value < 1) {
          count.value = `1`;
        }
      });

      if (count) {
        count.addEventListener("change", () => {
          if (count.value < 10) {
            count.value = count.value;
          }
        });
      }

      plus.addEventListener("click", () => {
        count.value++;
        if (count.value < 10) {
          count.value = count.value;
        }
      });
    });
  }
}
