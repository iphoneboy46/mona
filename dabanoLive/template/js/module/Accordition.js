export default function Accordition(){
    $(document).ready(function(){
        var footerTitle = $(".title-accor");
        var footerContent = $(".footer-menu");
        footerContent.hide();
        footerTitle.each(function(){
            $(this).click(function(){
                $(this).parents(".d-item").find(".footer-menu").slideToggle(500);
                $(this).parents(".d-item").find(".anggle-down").toggleClass("rotate-active");
            })
        })
    })
}