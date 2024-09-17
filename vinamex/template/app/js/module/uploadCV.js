export default function uploadCV() {

    const btnUploads = document.querySelectorAll(
        ".btn-upload"
    );
    if (btnUploads) {
        btnUploads.forEach((btnUpload) => {
            var fileupload = btnUpload.querySelector(".fileUpload");


            var textFileUpload = btnUpload.querySelector(
                ".text-file-upload"
            );
            fileupload.addEventListener("change", () => {
                textFileUpload.innerHTML = fileupload.files[0].name;
            });
        })

       

    }
}