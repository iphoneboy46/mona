export default function uploadImage() {
    const Upload = document.querySelector(".box-upload");
    if (Upload) {
        const wrap = Upload.querySelector(".list-img");
        const btnUpload = Upload.querySelector(".upload-img");
        const input = Upload.querySelector(".file-img");

        btnUpload.addEventListener("click", () => {
            input.click();
        });

        const dataTransfer = new DataTransfer();
        console.log(dataTransfer);
        input.addEventListener("change", (e) => {
            var files = e.target.files,
                file;
            for (var i = 0; i < files.length; i++) {
                file = files[i];
                dataTransfer.items.add(file);

                $(wrap).append(
                    `
               <li class="product-dg-cmt-item item-img">
                                                         <div class="product-dg-cmt-exits delete-img close">
                                                            <i class="fal fa-times"></i>
                                                        </div>
                                                        <div class="product-dg-cmt-img">
                                                            <img src="${URL.createObjectURL(file)}" alt="">
                                                        </div>
                                                    </li>
               `
                );
                console.log(URL.createObjectURL(file))
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
                        console.log(input.files)
                    });
                });
            };

            removeItem(file);
        });
    }
}