export default function playVideo() {
  const backgroundVideos = document.querySelectorAll(".background-vd");

  if (backgroundVideos) {

    backgroundVideos.forEach((backgroundVideo,index)=>{
      const btnPlayVd = document.querySelectorAll(".btn-play-vd");
      const videoPlayInner = document.querySelectorAll(".video-play-inner");


  
  
      backgroundVideo.addEventListener("click", () => {
        btnPlayVd[index].classList.remove("hiddened");
        backgroundVideo.classList.remove("hiddened");
        videoPlayInner[index].pause();
  
      })
  
  
      btnPlayVd[index].addEventListener("click", () => {
        btnPlayVd[index].classList.add("hiddened");
        backgroundVideo.classList.add("hiddened");
        videoPlayInner[index].play();
  
      })
  
  
  
      videoPlayInner[index].addEventListener("ended", () => {
        videoPlayInner[index].pause();
        btnPlayVd[index].classList.remove("hiddened");
        backgroundVideo.classList.remove("hiddened");
  
  
  
      });
    })

   
  }
}
