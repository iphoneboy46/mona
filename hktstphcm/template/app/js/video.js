function VideoJs() {
    const vdjss = document.querySelectorAll(".vdjs");
    if (vdjss) {
        vdjss.forEach((vdjs) => {
            console.log(vdjs)
            const btnPlay = vdjs.querySelector(".vdbtnjs");
            const vd = vdjs.querySelector("video");
            const bg = vdjs.querySelector(".vdbgjs");
            btnPlay.addEventListener("click", () => {
                vd.play();
                vdjs.classList.add("hiddened");
            })

            bg.addEventListener("click", () => {
                vd.play();
                vdjs.classList.add("hiddened");
            })

            vd.addEventListener("ended", () => {
                vdjs.classList.remove("hiddened");
            })

            vd.addEventListener("pause", () => {

                vdjs.classList.remove("hiddened");
            })

            vd.addEventListener('seeking', function () {
                vd.play();
                vdjs.classList.add("hiddened");
            });

            vd.addEventListener('seeked', function () {
                vd.play();
                vdjs.classList.add("hiddened");

            })

        })
    }

    const ytbjss = document.querySelectorAll(".ytbjs");
    if (ytbjss) {
        ytbjss.forEach((ytbjs) => {

            var player;

            // Đảm bảo rằng onYouTubeIframeAPIReady là toàn cục và được định nghĩa trước khi tải API
            window.onYouTubeIframeAPIReady = function () {
                console.log("YouTube IFrame API is ready");
                const iframe = ytbjs.querySelector('#youtubeIframe');

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

                const btn = ytbjs.querySelector(".ytbbtnjs");

                if (btn) {
                    btn.addEventListener("click", () => {
                        ytbjs.classList.add("played");
                        if (player) {
                            // Phát video ngay lập tức
                            player.playVideo();
                        }
                    });
                }

                ytbjs.addEventListener("click", () => {
                    if (player) {
                        const playerState = player.getPlayerState();
                        if (playerState === YT.PlayerState.PAUSED || playerState === YT.PlayerState.UNSTARTED) {
                            player.playVideo();
                        }
                        ytbjs.classList.add("played");
                    }
                });
            }

            function onPlayerStateChange(event) {
                // const productVideo = document.querySelector(".product_video");

                if (event.data === YT.PlayerState.PAUSED) {
                    ytbjs.classList.remove("played");
                } else if (event.data === YT.PlayerState.PLAYING) {
                    ytbjs.classList.add("played");
                }
            }

            function extractVideoId(url) {
                // Hàm để trích xuất video ID từ URL
                const match = url.match(/embed\/([^?]+)/);
                return match ? match[1] : null;
            }

            // loadYouTubeAPI();
            onYouTubeIframeAPIReady();

            // console.log(ytbjs)
            // const btnPlay = ytbjs.querySelector(".ytbbtnjs");
            // const ytb = ytbjs.querySelector("iframe");

        })
    }
}

VideoJs()