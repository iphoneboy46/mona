export default function playVideo() {
  const videoPlayInner = document.querySelector(".video-play-inner");
  
  if (videoPlayInner) {
    const btnPlayVd = document.querySelector(".btn-play-vd");
    const backgroundVideo = document.querySelector(".background-vd");
    
    console.log(videoPlayInner);
  
    btnPlayVd.addEventListener("click", () => {
      videoPlayInner.play();
      btnPlayVd.classList.add("hiddened");
      backgroundVideo.classList.add("actived");
      
    });

    backgroundVideo.addEventListener("click", () => {
      videoPlayInner.pause();
      btnPlayVd.classList.remove("hiddened");
      backgroundVideo.classList.remove("actived");
    });

    videoPlayInner.addEventListener("ended", () => {
        videoPlayInner.pause();
        btnPlayVd.classList.remove("hiddened");
        backgroundVideo.classList.toggle("actived");
  
      });
  }
}
