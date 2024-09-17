export default function uploadCV(){
   
    const btnUpload = document.querySelector(
        ".btn-upload"
      );
      if (btnUpload) {
        btnUpload.addEventListener("click", () => {
          var fileupload = document.getElementById("fileUpload");
        
          var textFileUpload = document.querySelector(
            ".text-file-upload"
          );
          fileupload.click();
          fileupload.addEventListener("change", () => {
            textFileUpload.innerHTML = fileupload.files[0].name;
          });
        });
      }
}