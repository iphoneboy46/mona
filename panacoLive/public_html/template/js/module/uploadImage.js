export default function uploadImage() {
  const Uploads = document.querySelectorAll(".box-upload");
  if (Uploads) {
    Uploads.forEach((Upload) => {
      const wrap = Upload.querySelector(".list-img");
      const btnUpload = Upload.querySelector(".upload-img");
      const input = Upload.querySelector(".file-img");


      btnUpload.addEventListener("click", () => {
        input.click();
      });

      const dataTransfer = new DataTransfer();


      input.addEventListener("change", (e) => {
        var files = e.target.files, file;
        for (var i = 0; i < files.length; i++) {
          file = files[i];
          dataTransfer.items.add(file);

          $(wrap).append(
            `
            <li class="comment_box--input-item item-img d-item">
              <div class="comment_box--input-ex close"><i class="fas fa-times"></i></div>
              <div class="comment_box--input-img"> 
                <img src="${URL.createObjectURL(file)}" alt=""> 
              </div>
            </li>
          `
          );

        }
        input.files = dataTransfer.files;



        var removeItem = function (fileEle) {
          const listClose = Upload.querySelectorAll(".close");
          listClose.forEach((ele, i) => {
            ele.addEventListener("click", (e) => {
              $(ele).parent().closest(".item-img").remove();
              const dataList = dataTransfer.items;
              for (let j = dataList.length - 1; j >= 0; j--) {
                if (i === j) {
                  if (dataList[i].kind === "file") {
                    dataList.remove(i);
                  }
                }
              }

              input.files = dataTransfer.files;

            });
          });
        };





        removeItem(file);



      });

    })



  }


}
