import AosModule from "./module/AosModule.js";
import SwiperModule from "./module/SwiperModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import MenuHeader from "./module/MenuHeader.js";
import EnableInput from "./module/EnableInput.js";
import ViewCartModule from "./module/ViewCartModule.js";
import CountdownModule from "./module/CountdownModule.js";
import CountDownTime from "./module/CountDownTime.js";
import ShippingPage from "./module/ShippingPage.js";
import AccordionModule from "./module/AccordionModule.js";
import FormModule from "./module/FormModule.js";
import BlogModule from "./module/BlogModule.js";
import RangeModule from "./module/RangeModule.js";
import Counter from "./module/Counter.js";
import LoadMoreModule from "./module/LoadMoreModule.js";
import ModalModule from "./module/ModalModule.js";

window.addEventListener("DOMContentLoaded", () => {
  MenuHeader();
  AosModule();
  TabModule();
  Select2Module();
  SwiperModule();
  GalleryModule();
  //EnableInput();
  ViewCartModule();
  CountdownModule();
  CountDownTime();
  AccordionModule();
  FormModule();
  RangeModule();
  Counter();
  LoadMoreModule();
  ModalModule();

  //ShipppingPage
  ShippingPage()
  BlogModule()
});
