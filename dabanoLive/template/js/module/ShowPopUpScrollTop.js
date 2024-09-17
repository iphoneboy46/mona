export default function ShowPopUpScrollTop(){
    $(document).ready(function(){
        var boxPopup = $(".alert.showAlert.show")
        if(boxPopup){
            var firstSetion = $(".product-ct");
            $("html,body").animate({scrollTop : firstSetion.offset().top
            })
        }
    })
}