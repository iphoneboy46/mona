import AosModule from "./module/AosModule.js";
import SwiperModule from "./module/SwiperModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import Header from "./module/Header.js";
import DateJS from "./module/date.js";
import MasonryJS from "./module/masonry.js";
import scrollAni from "./module/scrollAni.js";
import HoverJs from "./module/hover.js";
import ScrollFullPage from "./module/scrollFullPage.js";
import HomeJs from "./module/Home.js";
import SplideSl from "./module/Splide.js";
import LoadModule from "./module/Loading.js";
import LinksMain from "./module/linksMain.js";
import ScrollToSectionModule from "./module/ScrollToSectionModule.js";
import faq from "./module/faq.js";
import uploadCV from "./module/uploadCV.js";
import popupJS from "./module/popup.js";
import Why from "./module/why.js";

window.addEventListener("DOMContentLoaded", () => {
    AosModule();
    Select2Module();
    SwiperModule();
    GalleryModule();
    Header();
    DateJS();
    MasonryJS();
    TabModule();
    scrollAni();
    HoverJs();
    ScrollFullPage();
    HomeJs();
    SplideSl();
    LoadModule();
    LinksMain();
    ScrollToSectionModule();
    faq();
    uploadCV();
    popupJS();
    Why();
});