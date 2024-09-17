function uploadCV() {


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

    const btnUploads = document.querySelectorAll(
      ".btn-upload"
    );
    if (btnUploads) {
      btnUploads.forEach((btnUpload) => {
        btnUpload.addEventListener("click", () => {
          var fileupload = btnUpload.querySelector(".fileUpload");
          var textFileUpload = btnUpload.querySelector(
            ".text-file-upload"
          );
          var imgSrc = btnUpload.querySelector(".img-src");
          fileupload.click();

          fileupload.addEventListener("change", (e) => {
            let file = e.target.files[0];

            console.log(name);
            imgSrc.setAttribute("src", URL.createObjectURL(file));
            fileupload.setAttribute("value", imgSrc.src)
            if (textFileUpload) {
              textFileUpload.innerHTML = file.name;
            }
          });
        });
      })

    }
  }
}

uploadCV();