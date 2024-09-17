export default function Hover() {
  const btnWhite = document.querySelectorAll(".btn-white");

  if (btnWhite) {
    btnWhite.forEach((button) => {
      const ripples = button.querySelector(".layer");
      button.addEventListener("mouseenter", function (e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const w = button.offsetWidth * 3;
        const h = button.offsetHeight * 3;

        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;
        ripples.style.height = `${w}px`;
        ripples.style.width = `${w}px`;
        // gsap.to(ripples, 0.4, {
        //   left: x,
        //   top: y,
        //   height: w,
        //   width: w,
        // });
      });
      button.addEventListener("mouseout", function (e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;
        ripples.style.height = `0px`;
        ripples.style.width = `0px`;
        // gsap.to(ripples, 0.1, {
        //   left: x,
        //   top: y,
        //   height: 0,
        //   width: 0,
        // });
      });
    });
  }
  const btnMain = document.querySelectorAll(".btn-main");

  if (btnMain) {
    btnMain.forEach((button) => {
      const ripples = document.createElement("span");
      ripples.className = "layer";
      button.appendChild(ripples);
      button.addEventListener("mouseenter", function (e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const w = button.offsetWidth * 3;
        const h = button.offsetHeight * 3;

        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;
        ripples.style.height = `${w}px`;
        ripples.style.width = `${w}px`;
      });
      button.addEventListener("mouseout", function (e) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;
        ripples.style.height = `0px`;
        ripples.style.width = `0px`;
      });
    });
  }
}
