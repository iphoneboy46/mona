export default function zoomImg() {
    const productCt = document.querySelector(".product_ct");
    if (productCt) {
        if (window.screen.width > 1200) {
            $(document).ready(function () {
                $('.zoom').magnify({
                    speed: 100,
                    magnifiedWidth: 1200,
                    magnifiedHeight: 1200
                });

            });
        }

    }
}