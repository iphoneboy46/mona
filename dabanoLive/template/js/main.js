import AosModule from "./module/AosModule.js";
import SwiperModule from "./module/SwiperModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import HeaderModule from "./module/HeaderModule.js";
import Tabs from "./module/tabs.js";
import PopupModule from "./module/PopupModule.js";
// import CollapseModule from "./module/CollapseModule.js";
import BtnToTopModule from "./module/BtnToTopModule.js";
import ScrollToSectionModule from "./module/ScrollToSectionModule.js";
import Quantity from "./module/quantity.js";
import seeMore from "./module/seeMore.js";
import faq from "./module/faq.js";
import filterRes from "./module/filterRes.js";
import PasswordJS from "./module/Password.js";
import uploadImage from "./module/uploadImage.js";
import uploadCV from "./module/uploadCV.js";
import CountUpModule from "./module/CountUpModule.js";
import loadPage from "./module/loadPage.js";
import LinksMain from "./module/linksMain.js";
import Accordition from "./module/Accordition.js";
import ShowModalLogin from "./module/ShowModalLogin.js";
import ScrollBtnSticky from "./module/ScrollBtnSticky.js";
import HandleRangeSlider from "./module/HandleRangeSilder.js";
import ActiveModule from "./module/activeModule.js";

window.addEventListener("DOMContentLoaded", () => {
    // Animation
    AosModule();
    // Tab
    TabModule();
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
    Quantity();
    seeMore();
    faq();
    filterRes();
    PasswordJS();
    uploadImage(); 
    uploadCV();
    CountUpModule();
    loadPage();
    LinksMain();
    // Accordition
    Accordition();
    // Show modal login
    ShowModalLogin();
    // scroll btn sticky
     ScrollBtnSticky();
    // range Slider
    HandleRangeSlider();
    // active modoule
    ActiveModule();
});