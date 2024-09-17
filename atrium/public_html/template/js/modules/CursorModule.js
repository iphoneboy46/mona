export default function CursorModule() {
  const cursor = document.querySelector(".cursorJs");
  const box = document.querySelector(".box-target-cursor");
  const targets = document.querySelectorAll(".target-cursor");
  const arrow = document.querySelector(".cs-arrow");
  if (box && cursor) {
    (function () {
      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
        scale: 0,
      });

      document.addEventListener("pointermove", movecursor);
      function movecursor(e) {
        let react = arrow.getBoundingClientRect();
        gsap.to(cursor, {
          duration: 3,
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          ease: Power4.easeOut,
        });
        gsap.to(arrow, {
          duration: 3,
          x: (e.clientX - react.left) / 8,
          y: (e.clientY - react.top) / 8,
          ease: Power4.easeOut,
        });
      }
    })();

    box.addEventListener("mouseenter", () => {
      gsap.to(cursor, 0.5, {
        scale: 1,
        ease: Bounce.easeOut,
      });
    });
    box.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 0,
        ease: Power4.easeOut,
      });
    });
  }
  if (targets && cursor) {
    targets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        gsap.to(cursor, 0.5, {
          scale: 0.5,
          rotate: "45deg",
          ease: Power4.easeOut,
        });
      });
      target.addEventListener("mouseleave", () => {
        gsap.to(cursor, 0.5, {
          scale: 1,
          rotate: "0",
          ease: Bounce.easeOut,
        });
      });
    });
  }
}
