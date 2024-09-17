export default function UploadImage() {
  const changeImage = document.querySelector(".change-image");
  if (changeImage) {
    const inputUpload = changeImage.querySelector(".upload-image");
    let loadFile = function (event) {
      let image = changeImage.querySelector(".preview-image img");
      image.src = URL.createObjectURL(event.target.files[0]);
      image.srcset = URL.createObjectURL(event.target.files[0]);
    };
    if (inputUpload) {
      inputUpload.addEventListener("change", loadFile);
    }
  }
}
