export default function BlockKey() {
    
   

    window.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Chặn sự kiện mặc định
    });

    // Chặn sự kiện keydown khi phím F12 được nhấn
    window.addEventListener('keydown', (e) => {
        if (e.key === "F12" || e.keyCode === 123) {
            e.preventDefault(); // Chặn sự kiện mặc định
        }
    });

    // Lắng nghe sự kiện keydown trên document
    document.addEventListener('keydown', (e) => {
        // Kiểm tra xem nút Esc đã được nhấn hay không
        if (e.key === "Escape" || e.keyCode === 27) {
            // Chặn thao tác mặc định của nút Esc
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

        }

    });


    document.addEventListener('keydown', (e) => {
        // Kiểm tra xem có Shift và Ctrl được nhấn không, và phím C được nhấn không
        if (e.shiftKey && e.ctrlKey && (e.key === "c" || e.keyCode === 67)) {
            e.preventDefault(); // Chặn sự kiện mặc định
            e.stopPropagation(); // Ngăn sự kiện lan ra các phần tử khác
            // Thêm mã JavaScript để xử lý khi người dùng nhấn Shift + Ctrl + C
            // Ví dụ: 
            // alert("Shift + Ctrl + C đã bị chặn!");
        }
    });
}
