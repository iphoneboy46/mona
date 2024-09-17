$(document).ready(function () {




    const newsCt = document.querySelector(".newsCt");
    if (newsCt) {
        console.log("áadasd")
        $('.js-op2').select2({
            placeholder: function () {
                return $(this).data('placeholder');
            },
        });

        // // Đặt giá trị mặc định là "16" khi khởi tạo
        // $('.js-op2').val('fz16').trigger('change');

        // Xử lý sự kiện khi chọn option
        $('.js-op2').on('change', function () {

            // Lấy giá trị của option đã chọn
            const selectedClass = $(this).val();

            // Lấy phần tử content
            const content = $('.newsCt_box--lf-content');

            // Lấy tất cả các class hiện có
            const allClasses = content.attr('class').split(' ');

            // Xác định tiền tố các class bạn muốn loại bỏ (ở đây là "class-")
            const prefix = 'fz';

            // Lọc và xóa các class có tiền tố xác định
            allClasses.forEach((cls) => {
                if (cls.startsWith(prefix)) {
                    console.log(cls)
                    content.removeClass(cls);
                }
            });

            // Thêm class mới nếu có
            if (selectedClass) {
                content.addClass(selectedClass);
            }

            // // Nếu có class mới được chọn, thêm class vào content
            // if (selectedClass) {
            //     $('.newsCt_box--lf-content').addClass(selectedClass);
            // }
        });
    }
});


