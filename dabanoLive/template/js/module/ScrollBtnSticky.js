export default function ScrollBtnSticky(){
    $(document).ready(function(){
        var producCtElement = document.querySelector('.product-ct')
        if(producCtElement){
          var buttonElement = $(producCtElement).children().find(".product-ct-rt-btn");
          var buttonSticky = $(producCtElement).children().find(".sticky-active");
          if(buttonElement){
            var pointHide = buttonElement.offset().top;
            $(window).scroll(function(){
              if( $(this).scrollTop() > pointHide){
                buttonElement.addClass("hide-active");
                buttonSticky.addClass("show-active");
              }
              else{
                buttonElement.removeClass("hide-active");
                buttonSticky.removeClass("show-active");
              }
            })

          }
        }
      })
}