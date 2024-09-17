export default function Select2Module() {
    $(document).ready(function () {

        $('.js-filter').select2();


       

    });

    // function format(item, state) {
    //     if (!item.id) {
    //         return item.text;
    //     }
    //     var countryUrl = "https://hatscripts.github.io/circle-flags/flags/";
    //     var stateUrl = "https://oxguy3.github.io/flags/svg/us/";
    //     var url = state ? stateUrl : countryUrl;
    //     var img = $("<img>", {
    //         class: "img-flag",
    //         width: 26,
    //         src: url + item.element.value.toLowerCase() + ".svg"
    //     });
    //     var span = $("<span>", {
    //         text: " " + item.text
    //     });
    //     span.prepend(img);
    //     return span;
    // }

    // $(document).ready(function () {
    //     $("#countries").select2({
    //         templateResult: function (item) {
    //             return format(item, false);
    //         }
    //     });
    //     $("#us-states").select2({
    //         templateResult: function (item) {
    //             return format(item, true);
    //         }
    //     });
    // });


}