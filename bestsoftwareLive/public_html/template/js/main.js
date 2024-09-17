import AosModule from "./module/AosModule.js";
import SwiperModule from "./module/SwiperModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import HeaderModule from "./module/HeaderModule.js";
import Tabs from "./module/tabs.js";
import PopupModule from "./module/PopupModule.js";
// import CollapseModule from "./module/CollapseModule.js";
import BtnToTopModule from "./module/BtnToTopModule.js";
import ScrollToSectionModule from "./module/ScrollToSectionModule.js";
import seeMore from "./module/seeMore.js";
import faq from "./module/faq.js";
import CountUpModule from "./module/CountUpModule.js";
import LinksMain from "./module/linksMain.js";
import Canvas from "./module/canvas.js";
import Input from "./module/input.js";
import uploadCV from "./module/uploadCV.js";
import GSAPJS from "./module/gsap.js";
import CircleText from "./module/Circletext.js";
import playVideo from "./module/playVideo.js";
import scrollAni from "./module/scrollAni.js";

window.addEventListener("DOMContentLoaded", () => {
    // Animation
    AosModule();
    // Tab
   
    // Select
    Select2Module();
    // Component
    SwiperModule();
    GalleryModule();
    HeaderModule();
    PopupModule();
    BtnToTopModule();
    Tabs();
    // CollapseModule()
    ScrollToSectionModule();
    seeMore();
    faq();
    CountUpModule();
    LinksMain();
    Canvas();
    Input();
    uploadCV();
    GSAPJS();
    CircleText();
    playVideo();
    scrollAni();
});

