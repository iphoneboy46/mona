export default function CountUpModule() {
  const homeAtLfTop = document.querySelector(".our-cus");
  if (homeAtLfTop) {
    $('.our-cus-rt-item-number .our-cus-rt-item-num').countUp({
      'time': 5000,
      'delay': 15
    });
  }

  const serviceFeatures = document.querySelector(".service-features");
  if (serviceFeatures) {
    $('.service-features-top-tp .service-features-top-num').countUp({
      'time': 3000,
      'delay': 10
    });
  }


  const bannerHomeLfItem = document.querySelector(".banner-home-lf-item");

  if (bannerHomeLfItem) {
    $('.banner-home-lf-item .banner-home-lf-bottom-tp-num .num').countUp({
      'time': 3000,
      'delay': 10
    });


    $('.banner-home-lf-bottom-num .num').countUp({
      'time': 3000,
      'delay': 10
    });


    $('.banner-home-lf-item .banner-home-lf-bottom-bt-num').countUp({
      'time': 3000,
      'delay': 10,
      
    });


  }

  const homeAllAi = document.querySelector(".home-all-ai");
  if(homeAllAi){
    $('.home-all-ai-lf-num .num').countUp({
      'time': 1000,
      'delay': 10
    });
  }

}
