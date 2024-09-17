export default function HoverJs() {
    const productVideo = document.querySelector(".product_video");
    if (productVideo) {



        // // Tải API YouTube IFrame
        // function loadYouTubeAPI() {
        //     const script = document.createElement('script');
        //     script.src = 'https://www.youtube.com/iframe_api';
        //     document.body.appendChild(script);
        // }

        // // Hàm này sẽ được gọi tự động bởi API YouTube khi nó đã tải xong
        // function onYouTubeIframeAPIReady() {
        //     console.log("YouTube IFrame API is ready");
        //     player = new YT.Player('youtubeIframe', {
        //         // Thay đổi ID video theo nhu cầu
        //         events: {
        //             'onReady': onPlayerReady,
        //             'onStateChange': onPlayerStateChange
        //         }
        //     });
        // }


        // var player;

        // function onPlayerReady(event) {
        //     console.log("Player is ready");
        //     const productVideo = document.querySelector(".product_video");
        //     const btn = productVideo.querySelector(".btn-play");

        //     if (btn) {
        //         btn.addEventListener("click", () => {
        //             productVideo.classList.add("played");
        //             player.playVideo();
        //             loadYouTubeAPI();
        //             console.log("ádasdasd")

        //         });
        //     }

        //     productVideo.addEventListener("click", () => {
        //         productVideo.classList.add("played");
        //         player.playVideo();
        //         loadYouTubeAPI();
        //         console.log("ádasdasd2")


        //     });
        // }

        // function onPlayerStateChange(event) {
        //     const productVideo = document.querySelector(".product_video");

        //     if (event.data == YT.PlayerState.PAUSED) {
        //         productVideo.classList.remove("played");
        //     } else {
        //         productVideo.classList.add("played");
        //     }
        // }

        // // Gọi hàm để tải API
        // loadYouTubeAPI();
        // onYouTubeIframeAPIReady();



        // var player;


        // // Tải API YouTube
        // function loadYouTubeAPI() {
        //     const script = document.createElement('script');
        //     script.src = 'https://www.youtube.com/iframe_api';
        //     document.body.appendChild(script);
        // }

        // // Hàm này sẽ được gọi tự động bởi API YouTube khi nó đã tải xong
        // function onYouTubeIframeAPIReady() {
        //     console.log("YouTube IFrame API is ready");
        //     const iframe = document.querySelector('#youtubeIframe');

        //     if (iframe) {
        //         // Kiểm tra src trước và nếu không có, kiểm tra data-src
        //         if (!iframe.src) {
        //             const dataSrc = iframe.getAttribute('data-src');
        //             if (dataSrc) {
        //                 iframe.src = dataSrc;
        //             } else {
        //                 console.error("No video source found in iframe.");
        //                 return; // Ngừng nếu không có nguồn video
        //             }
        //         }

        //         player = new YT.Player('youtubeIframe', {
        //             events: {
        //                 'onReady': onPlayerReady,
        //                 'onStateChange': onPlayerStateChange
        //             }
        //         });
        //     }
        // }


        // function onPlayerReady(event) {
        //     console.log("Player is ready");
        //     const productVideo = document.querySelector(".product_video");
        //     const btn = productVideo.querySelector(".btn-play");

        //     if (btn) {
        //         btn.addEventListener("click", () => {
        //             productVideo.classList.add("played");
        //             player.playVideo();
        //             console.log("Video played");
        //         });
        //     }

        //     productVideo.addEventListener("click", () => {
        //         productVideo.classList.add("played");
        //         player.playVideo();
        //         console.log("Video played");
        //     });
        // }

        // function onPlayerStateChange(event) {
        //     const productVideo = document.querySelector(".product_video");

        //     if (event.data == YT.PlayerState.PAUSED) {
        //         productVideo.classList.remove("played");
        //     } else {
        //         productVideo.classList.add("played");
        //     }
        // }

        // // Gọi hàm để tải API
        // loadYouTubeAPI();
        // onYouTubeIframeAPIReady();

        var player;

        // Đảm bảo rằng onYouTubeIframeAPIReady là toàn cục và được định nghĩa trước khi tải API
        window.onYouTubeIframeAPIReady = function () {
            console.log("YouTube IFrame API is ready");
            const iframe = document.querySelector('#youtubeIframe');

            if (iframe) {
                // Kiểm tra src và data-src
                if (!iframe.src) {
                    const dataSrc = iframe.getAttribute('data-src');
                    if (dataSrc) {
                        iframe.src = dataSrc;
                    } else {
                        console.error("No video source found in iframe.");
                        return;
                    }
                }

                // Khởi tạo player
                player = new YT.Player('youtubeIframe', {
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            } else {
                console.error("No iframe found with ID 'youtubeIframe'.");
            }
        };

        // Đặt script API YouTube
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.onload = function () {
            console.log('YouTube IFrame API script loaded');
        };
        script.onerror = function () {
            console.error('Error loading YouTube IFrame API script');
        };
        document.body.appendChild(script);

        function onPlayerReady(event) {
            console.log("Player is ready");
            const productVideo = document.querySelector(".product_video");
            const btn = productVideo.querySelector(".btn-play");

            if (btn) {
                btn.addEventListener("click", () => {
                    productVideo.classList.add("played");
                    if (player) {
                        // Phát video ngay lập tức
                        player.playVideo();
                    }
                });
            }

            productVideo.addEventListener("click", () => {
                if (player) {
                    const playerState = player.getPlayerState();
                    if (playerState === YT.PlayerState.PAUSED || playerState === YT.PlayerState.UNSTARTED) {
                        player.playVideo();
                    }
                    productVideo.classList.add("played");
                }
            });
        }

        function onPlayerStateChange(event) {
            const productVideo = document.querySelector(".product_video");

            if (event.data === YT.PlayerState.PAUSED) {
                productVideo.classList.remove("played");
            } else if (event.data === YT.PlayerState.PLAYING) {
                productVideo.classList.add("played");
            }
        }

        function extractVideoId(url) {
            // Hàm để trích xuất video ID từ URL
            const match = url.match(/embed\/([^?]+)/);
            return match ? match[1] : null;
        }

        // loadYouTubeAPI();
        onYouTubeIframeAPIReady();
    }

}