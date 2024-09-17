// function inputEditor() {

//     const formItems = document.querySelectorAll(".form-item.quillJS");
//     if (formItems) {
//         formItems.forEach((formItem) => {

//             const id = formItem.querySelector("#editor-container");
//             if (id) {
//                 var placeholderText = id.getAttribute('data-placeholder');

//                 var quill = new Quill('#editor-container', {
//                     theme: 'snow',
//                     placeholder: placeholderText,
//                     modules: {
//                         toolbar: [
//                             [{ 'header': [1, 2, 3, false] }],
//                             ['bold', 'italic', 'underline'],
//                             [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                             [{ 'color': [] }, { 'background': [] }],
//                             [{ 'align': [] }],
//                             ['link', 'image']
//                         ]
//                     }
//                 });
//             }

//             const id2 = formItem.querySelector("#editor-container2");
//             if (id2) {
//                 var placeholderText = id2.getAttribute('data-placeholder2');

//                 var quill2 = new Quill('#editor-container2', {
//                     theme: 'snow',
//                     placeholder: placeholderText,
//                     modules: {
//                         toolbar: [
//                             [{ 'header': [1, 2, 3, false] }],
//                             ['bold', 'italic', 'underline'],
//                             [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//                             [{ 'color': [] }, { 'background': [] }],
//                             [{ 'align': [] }],
//                             ['link', 'image']
//                         ]
//                     }
//                 });
//             }



//         })
//     }


//     document.addEventListener('DOMContentLoaded', function () {
//         const pickers = document.querySelectorAll('.ql-picker');

//         pickers.forEach(picker => {
//             const options = picker.querySelector('.ql-picker-options');

//             // Xử lý sự kiện click để mở/đóng dropdown
//             picker.addEventListener('click', function (event) {
//                 event.preventDefault(); // Ngăn hành vi mặc định của sự kiện
//                 event.stopPropagation(); // Ngăn sự kiện lan tỏa

//                 // Toggle class để mở/đóng dropdown
//                 if (options.classList.contains('show')) {
//                     options.classList.remove('show');
//                 } else {
//                     document.querySelectorAll('.ql-picker-options.show').forEach(openDropdown => {
//                         openDropdown.classList.remove('show');
//                     });
//                     options.classList.add('show');
//                 }
//             });

//             // Đóng dropdown khi chọn xong
//             picker.querySelectorAll('.ql-picker-item').forEach(item => {
//                 item.addEventListener('click', function () {
//                     // Đợi cho việc chọn mục hoàn tất trước khi đóng dropdown
//                     setTimeout(() => {
//                         options.classList.remove('show');
//                     }, 0); // Đảm bảo rằng dropdown được đóng sau khi chọn mục
//                 });
//             });
//         });

//         // Đóng dropdown khi click bên ngoài
//         document.addEventListener('click', function (event) {
//             if (!event.target.closest('.ql-picker')) {
//                 document.querySelectorAll('.ql-picker-options.show').forEach(openDropdown => {
//                     openDropdown.classList.remove('show');
//                 });
//             }
//         });
//     });




// }

// inputEditor();



function inputEditor() {
    const formItems = document.querySelectorAll(".form-item.quillJS");
    if (formItems) {
        formItems.forEach((formItem) => {
            const id = formItem.querySelector("#editor-container");
            if (id) {
                const placeholderText = id.getAttribute("data-placeholder");

                const quill = new Quill("#editor-container", {
                    theme: "snow",
                    placeholder: placeholderText,
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, 3, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                            ["link", "image"],
                        ],
                    },
                });

                // Đăng ký handler cho nút hình ảnh
                quill.getModule("toolbar").addHandler("image", () => {
                    selectLocalImage(quill);
                });
            }

            const id2 = formItem.querySelector("#editor-container2");
            if (id2) {
                const placeholderText = id2.getAttribute("data-placeholder2");

                const quill2 = new Quill("#editor-container2", {
                    theme: "snow",
                    placeholder: placeholderText,
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, 3, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                            ["link", "image"],
                        ],
                    },
                });

                // Đăng ký handler cho nút hình ảnh
                quill2.getModule("toolbar").addHandler("image", () => {
                    selectLocalImage(quill2);
                });
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const pickers = document.querySelectorAll(".ql-picker");

        pickers.forEach((picker) => {
            const options = picker.querySelector(".ql-picker-options");

            picker.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (options.classList.contains("show")) {
                    options.classList.remove("show");
                } else {
                    document.querySelectorAll(".ql-picker-options.show").forEach((openDropdown) => {
                        openDropdown.classList.remove("show");
                    });
                    options.classList.add("show");
                }
            });

            picker.querySelectorAll(".ql-picker-item").forEach((item) => {
                item.addEventListener("click", function () {
                    setTimeout(() => {
                        options.classList.remove("show");
                    }, 0);
                });
            });
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest(".ql-picker")) {
                document.querySelectorAll(".ql-picker-options.show").forEach((openDropdown) => {
                    openDropdown.classList.remove("show");
                });
            }
        });
    });
}

// Hàm xử lý chọn ảnh và kiểm tra kích thước ảnh
function selectLocalImage(quill) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
        const file = input.files[0];

        // Kiểm tra kích thước file
        if (file.size > 2 * 1024 * 1024) {
            const popupAlert = document.querySelector(".popup_alert");
            popupAlert.classList.add("showed");
            setTimeout(() => {
                const popupAlertShowed = document.querySelector(".popup_alert.showed");
                popupAlertShowed.classList.remove("showed");
            }, 1400);
            return;
        } else {
            const popupAlert = document.querySelector(".popup_alert");
            popupAlert.classList.remove("showed");
        }

        const reader = new FileReader();
        reader.onload = () => {
            const range = quill.getSelection();
            
            // Kiểm tra nếu range trả về null thì chèn ảnh vào cuối nội dung
            const index = range ? range.index : quill.getLength();
            quill.insertEmbed(index, "image", reader.result);
        };
        reader.readAsDataURL(file);
    };
}

inputEditor();


