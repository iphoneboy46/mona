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
      var imgSrc = document.querySelector(".img-src");
      fileupload.click();

      fileupload.addEventListener("change", (e) => {
        let file = e.target.files[0];
        imgSrc.setAttribute("src", URL.createObjectURL(file));
        fileupload.setAttribute("value", imgSrc.src)
      });
    });
  }

  const chooseDate = document.querySelector(".choose-date");
  if (chooseDate) {

    $("#datepicker").datepicker({
      firstDay: 1,
      showOtherMonths: true,
      changeMonth: true,
      changeYear: true,
      format: 'dd/mm/yyyy',
    });

  }
}