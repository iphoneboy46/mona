export default function EnableInput() {

    $('.enableContactEmail').click(function(){
        var inputElement = $('input[name="contactEmail"]')
        inputElement.removeAttr('readonly');
        inputElement.val('');
        inputElement.focus();
    })

    $('.enableContactAddress').click(function(){
        var inputElement = $('input[name="contactAddress"]')
        var tagtext = $('.showtext');
        inputElement.attr('type', 'text');
        tagtext.hide()
        inputElement.val('');
        inputElement.focus();
    })


    $('.method-action button').click(function(){
        console.log('testing')
    })
}
