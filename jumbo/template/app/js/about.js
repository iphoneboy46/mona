
const aboutLocation = document.querySelector(".about_location");
console.log(aboutLocation)
if (aboutLocation) {
    var mySwiperAblflc = new Swiper(aboutLocation.querySelector(".mySwiperAblflc"), {
        slidesPerView: "auto",
        lazy: !0,
        pagination: {
            el: aboutLocation.querySelector(".swiper-pagination"),
            clickable: !0,
        },
        navigation: {
            nextEl: aboutLocation.querySelector(".next"),
            prevEl: aboutLocation.querySelector(".prev"),
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
    });

    mySwiperAblflc.on("slideChange", () => {
        var activeIndex = mySwiperAblflc.realIndex;
        const aboutLcRtItems = aboutLocation.querySelectorAll(".about_location--box-rt-item");
        const aboutLcRtItemShowed = aboutLocation.querySelector(".about_location--box-rt-item.showed");
        if (aboutLcRtItemShowed) {
            aboutLcRtItemShowed.classList.remove("showed")
        }
        aboutLcRtItems[activeIndex].classList.add("showed");




    })


}


const aboutFood = document.querySelector(".about_food");
if(aboutFood){
    const vdjss = aboutFood.querySelectorAll(".vdjs");
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

    const ytbjss = aboutFood.querySelectorAll(".ytbjs");
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

const aboutTeam = document.querySelector(".about_team");
if(aboutTeam) {
    var mySwiperTeamLf = new Swiper(aboutTeam.querySelector(".mySwiperTeamLf"), {
        slidesPerView: "auto",
        lazy: !0,
        // pagination: {
        //     el: qc.querySelector(".swiper-pagination"),
        //     clickable: !0,
        // },
        simulateTouch: false,
        navigation: {
            nextEl: aboutTeam.querySelector(".next"),
            prevEl: aboutTeam.querySelector(".prev"),
        },
        effect: "fade",
        fadeEffect: {
            // crossFade: true
        },
        // loop: true,
        speed: 1000,
        // autoplay: {
        //     delay: 8000,
        //     disableOnInteraction: true,
        // },

    });

    var mySwiperTeamRt = new Swiper(aboutTeam.querySelector(".mySwiperTeamRt"), {
        slidesPerView: "auto",
        lazy: !0,
        // pagination: {
        //     el: qc.querySelector(".swiper-pagination"),
        //     clickable: !0,
        // },
        simulateTouch: false,
        // navigation: {
        //     nextEl: aboutTeam.querySelector(".next"),
        //     prevEl: aboutTeam.querySelector(".prev"),
        // },
        effect: "fade",
        fadeEffect: {
            // crossFade: true
        },
        // loop: true,
        speed: 1000,
        // autoplay: {
        //     delay: 8000,
        //     disableOnInteraction: true,
        // },

    });

    mySwiperTeamLf.controller.control = mySwiperTeamRt;
    mySwiperTeamRt.controller.control = mySwiperTeamLf;

    mySwiperTeamLf.on("slideChange", () => {
        var activeIndex = mySwiperTeamLf.realIndex;
        const aboutTeamCtItems = aboutTeam.querySelectorAll(".about_team--box-ct-item");
        const aboutTeamCtItemShowed = aboutTeam.querySelector(".about_team--box-ct-item.showed");
        if (aboutTeamCtItemShowed) {
            aboutTeamCtItemShowed.classList.remove("showed")
        }
        aboutTeamCtItems[activeIndex].classList.add("showed");




    })

}

const aboutImgs = document.querySelector(".about_imgs");
if (aboutImgs) {
    var mySwiperAbImgs = new Swiper(aboutImgs.querySelector(".mySwiperAbImgs"), {
        slidesPerView: "auto",
        lazy: !0,
        // pagination: {
        //     el: qc.querySelector(".swiper-pagination"),
        //     clickable: !0,
        // },
        simulateTouch: false,
        navigation: {
            nextEl: aboutImgs.querySelector(".next"),
            prevEl: aboutImgs.querySelector(".prev"),
        },
        effect: "fade",
        fadeEffect: {
            // crossFade: true
        },
        // loop: true,
        speed: 1200,
        autoplay: {
            delay: 8000,
            disableOnInteraction: true,
        },

    });


    mySwiperAbImgs.on("slideChangeTransitionStart", () => {

        const vdjss = document.querySelectorAll(".vdjs");
        if (vdjss) {
            vdjss.forEach((vdjs) => {
                const vd = vdjs.querySelector("video");
                vd.pause();
                vdjs.classList.remove("hiddened");


            })


        }

        const ytbjss = document.querySelectorAll(".ytbvdjs");
        if (ytbjss) {
            ytbjss.forEach((ytbjs) => {

                ytbjs.classList.remove("hiddened");


            })




        }
        pauseYouTubeVideo();


    })



    function pauseYouTubeVideo() {
        var iframes = document.querySelectorAll('iframe');
        // console.log(iframes)
        if (iframes) {
            iframes.forEach(function (iframe) {
                iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

            })
        }
    }


    const vdjss = aboutImgs.querySelectorAll(".vdjs");
    if (vdjss) {
        vdjss.forEach((vdjs) => {
            console.log(vdjs)
            const btnPlay = vdjs.querySelector(".vdbtnjs");
            const vd = vdjs.querySelector("video");
            const bg = vdjs.querySelector(".vdbgjs");
            btnPlay.addEventListener("click", () => {
                vd.play();
                vdjs.classList.add("hiddened");
                // mySwiperQcLf.autoplay.stop();
            })

            bg.addEventListener("click", () => {
                vd.play();
                vdjs.classList.add("hiddened");
            })

            vd.addEventListener("ended", () => {
                vdjs.classList.remove("hiddened");
                // mySwiperQcLf.autoplay.start();

            })

            vd.addEventListener("pause", () => {

                vdjs.classList.remove("hiddened");
                mySwiperQcLf.autoplay.start();
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

    const ytbjss = aboutImgs.querySelectorAll(".ytbjs");
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
                        ytbjs.classList.add("hiddened");
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
                    ytbjs.classList.remove("hiddened");
                } else if (event.data === YT.PlayerState.PLAYING) {
                    ytbjs.classList.add("hiddened");
                }
            }

            function extractVideoId(url) {
                // Hàm để trích xuất video ID từ URL
                const match = url.match(/embed\/([^?]+)/);
                return match ? match[1] : null;
            }

            // loadYouTubeAPI();
            onYouTubeIframeAPIReady();



        })
    }
}





