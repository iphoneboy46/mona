export default function ShippingPage() {

    $(document).ready(function () {
        $('input[type="radio"]').click(function () {
            $('.label-style').removeClass('isActive');
            if ($(this).is(':checked')) {
                $(this).next('label').addClass('isActive');
            }
        });
    });

}