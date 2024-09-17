export default function LoadModule() {
    // const load = document.querySelector('.loading')
    // window.addEventListener('load', () => {

    //     if (load) {
    //         load.classList.add('loaded');
    //         document.body.style.overflow = "hidden";
    //         setTimeout(() => {
    //             load.classList.add('final');
    //         }, 1000)
    //         document.body.style.overflow = "hidden";

    //     }


    // })


    const Load = document.querySelector('.loading')
    

    const main = document.querySelector('.main')
    window.onload = function () {
        var start = new Date().getTime();
        var elapsed = 0;
        var totalTime = 2000; // Thời gian chạy trang web mục tiêu (5 giây trong ví dụ này)
        // document.body.style.overflow = " hidden";



        function updateProgress() {
            elapsed = new Date().getTime() - start;
            var percentage = Math.min((elapsed / totalTime) * 100, 100);
            
           

            if (elapsed >= totalTime) {
                
                if (Load) {
                    Load.classList.add('final');
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