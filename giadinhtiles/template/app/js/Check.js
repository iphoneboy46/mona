function CheckJS() {
    window.addEventListener("load", () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Kiểm tra iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            const btns = document.querySelectorAll(".btn");
            btns.forEach((btn) => {
                btn.classList.add("btn_ios");
            });
            return 'iOS';
        }

        // Kiểm tra macOS
        if (/Macintosh|Mac OS X/.test(userAgent)) {
            const btns = document.querySelectorAll(".btn");
            btns.forEach((btn) => {
                btn.classList.add("btn_ios");
            });
            return 'macOS';
        }

        // Không xác định được hoặc là hệ điều hành khác
        return 'Unknown OS';

    })



}


window.CheckJS = CheckJS;