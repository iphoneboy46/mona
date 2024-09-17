export default function uploadCV() {

  const boxUploads = document.querySelectorAll(".boxUpload");
  if (boxUploads) {
    boxUploads.forEach((boxUpload) => {
      const fileUpload = document.querySelector(".fileUpload");

      fileUpload.addEventListener("change", () => {
        boxUpload.classList.add("actived");
        const text = fileUpload.files[0].name;
        const textChange = boxUpload.querySelector(".textChange");
        textChange.innerHTML = text;
        console.log(fileUpload.files);
      })

      boxUpload.addEventListener(
        "dragenter",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          boxUpload.classList.add("actived");
        },
        false
      );

      boxUpload.addEventListener(
        "dragleave",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          boxUpload.classList.remove("actived");
        },
        false
      );

      boxUpload.addEventListener(
        "dragover",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          boxUpload.classList.add("actived");
        },
        false
      );


      boxUpload.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        let draggedData = e.dataTransfer;
        let files = draggedData.files;
        const text = files[0].name;
        const textChange = boxUpload.querySelector(".textChange");
        textChange.innerHTML = text;

      })
    })
  }
}