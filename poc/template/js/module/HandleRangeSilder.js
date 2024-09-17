export default function HandleRangeSlider(){
    var productFilter = document.querySelector(".product")
    if(productFilter){
        var sliderOne = document.querySelector(".slider-1");
        var sliderTwo = document.querySelector(".slider-2");
        var displayRangeOne = document.querySelector(".range-val-1");
        var displayRangeTwo = document.querySelector(".range-val-2");
        var minGap = 0;
        var sliderTrack = document.querySelector(".slider-track");
        var sliderMaxValue = document.querySelector(".slider-1").max;
        window.onload = function(){
            slideOne()
            slideTwo()
        }
    
        sliderOne.oninput = function(){
            slideOne();
            fillColor()
        }
        sliderTwo.oninput = function(){
            slideTwo();
            fillColor()
        }
        function slideOne(){
            if((parseInt(sliderTwo.value)) - parseInt(sliderOne.value) <= minGap){
                sliderOne.value = parseInt(sliderTwo.value) - minGap;
            }
            displayRangeOne.textContent = (parseInt(sliderOne.value).toLocaleString()) + "đ";
            fillColor()
        }
    
        function slideTwo(){
            if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }
            displayRangeTwo.textContent = (parseInt(sliderTwo.value).toLocaleString()) + "đ";
            fillColor()
        }
        function fillColor(){
            var percent1 = (sliderOne.value / sliderMaxValue) * 100 + "%";
            var percent2 = 100 - ((sliderTwo.value / sliderMaxValue) * 100 )+ "%";
            sliderTrack.style.left = percent1;
            sliderTrack.style.right = percent2;
        }
    }
}