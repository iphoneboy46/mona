export default function ActiveModule() {
    const optionList = $(".product-ct-rt-op-list ");
    if(optionList){
        const optionItem = $(".product-ct-rt-op-item ").find("label");
        optionItem.each(function(){
            $(this).click(function(){
                optionItem.removeClass("op-item-active");
                $(this).addClass("op-item-active");
            })
        })
    }
}