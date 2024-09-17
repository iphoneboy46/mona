export default function loadPage() {

    const preLoad = document.querySelector('.pre-load')
    const preLoadNumber = document.querySelector('.pre-load-number')
    const main = document.querySelector('.main')
    window.onload = function () {
        var start = new Date().getTime();
        var elapsed = 0;
        var totalTime = 5000; // Thời gian chạy trang web mục tiêu (5 giây trong ví dụ này)

        var progressBar = document.getElementById("progress-bar");

        function updateProgress() {
            elapsed = new Date().getTime() - start;
            var percentage = Math.min((elapsed / totalTime) * 100, 100);
            if (progressBar) {
                progressBar.style.width = percentage + "%";
            }
            if (preLoadNumber) {
                preLoadNumber.textContent = Math.floor(percentage.toFixed(2)) + "%";
            }
            if (elapsed >= totalTime) {
                if (preLoad) {
                    preLoad.classList.add('final');
                    main.classList.add("final");
                }
            }
            if (elapsed < totalTime) {
                requestAnimationFrame(updateProgress);
            }
        }

        updateProgress();

    };

}