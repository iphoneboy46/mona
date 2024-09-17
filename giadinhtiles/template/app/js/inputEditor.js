function inputEditor() {

    const formItems = document.querySelectorAll(".form-item.quillJS");
    if (formItems) {
        formItems.forEach((formItem) => {
            const id = formItem.querySelector("#editor-container");
            var placeholderText = id.getAttribute('data-placeholder');
            console.log(placeholderText)
            var quill = new Quill('#editor-container', {
                theme: 'snow',
                placeholder: placeholderText,
                modules: {
                    toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'align': [] }],
                        ['link', 'image'],
                        ['clean']
                    ]
                }
            });

        })
    }


    document.addEventListener('DOMContentLoaded', function () {
        const pickers = document.querySelectorAll('.ql-picker');

        pickers.forEach(picker => {
            const options = picker.querySelector('.ql-picker-options');

            // Xử lý sự kiện click để mở/đóng dropdown
            picker.addEventListener('click', function (event) {
                event.preventDefault(); // Ngăn hành vi mặc định của sự kiện
                event.stopPropagation(); // Ngăn sự kiện lan tỏa

                // Toggle class để mở/đóng dropdown
                if (options.classList.contains('show')) {
                    options.classList.remove('show');
                } else {
                    document.querySelectorAll('.ql-picker-options.show').forEach(openDropdown => {
                        openDropdown.classList.remove('show');
                    });
                    options.classList.add('show');
                }
            });

            // Đóng dropdown khi chọn xong
            picker.querySelectorAll('.ql-picker-item').forEach(item => {
                item.addEventListener('click', function () {
                    // Đợi cho việc chọn mục hoàn tất trước khi đóng dropdown
                    setTimeout(() => {
                        options.classList.remove('show');
                    }, 0); // Đảm bảo rằng dropdown được đóng sau khi chọn mục
                });
            });
        });

        // Đóng dropdown khi click bên ngoài
        document.addEventListener('click', function (event) {
            if (!event.target.closest('.ql-picker')) {
                document.querySelectorAll('.ql-picker-options.show').forEach(openDropdown => {
                    openDropdown.classList.remove('show');
                });
            }
        });
    });




}

inputEditor();