export default function RangeModule() {
  function updateProgressBar() {
    const minRange = parseInt(range[0].value);
    const maxRange = parseInt(range[1].value);
    const progressBar = document.querySelector(".range-slider .progress");

    const rangePercentage = ((maxRange - minRange) / range[0].max) * 100;
    const leftPercentage = (minRange / range[0].max) * 100;
    const rightPercentage = 100 - leftPercentage - rangePercentage;

    progressBar.style.left = leftPercentage + "%";
    progressBar.style.right = rightPercentage + "%";

    inputValue[0].value = minRange;
    inputValue[1].value = maxRange;
  }

  const range = document.querySelectorAll(".range-slider span input");
  const inputValue = document.querySelectorAll(".numberVal input");
  let gap = 0.1;

  range.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(range[0].value);
      let maxRange = parseInt(range[1].value);

      if (maxRange - minRange < gap) {
        if (e.target.className === "range-min") {
          range[0].value = maxRange - gap;
        } else {
          range[1].value = minRange + gap;
        }
      }

      updateProgressBar();
    });
  });

  // Update progress bar on initial load
  if ($('.range-slider ').length) {
    updateProgressBar();
  }
}
