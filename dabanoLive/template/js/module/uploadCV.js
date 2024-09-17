export default function uploadCV() {

  const btnUpload = document.querySelector(
    ".btn-upload"
  );
  if (btnUpload) {
    btnUpload.addEventListener("click", () => {
      var fileupload = document.getElementById("fileUpload");
      var textFileUpload = document.querySelector(
        ".text-file-upload"
      );
      var imgSrc = document.querySelector(".img-src")
      fileupload.click();
   
      fileupload.addEventListener("change", (e) => {
        let file = e.target.files[0];
        imgSrc.setAttribute("src", URL.createObjectURL(file));
      });
    });
  }
}