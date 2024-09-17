export default function CountDown() {
$(document).ready(function () {
    var seconds = 60;

    function updateCountdown() {
        $('.thankyou-autoback-countdown').text(seconds + 's');
        seconds--;

        if (seconds < 0) {
            clearInterval(interval);
        }
    }

    var interval = setInterval(updateCountdown, 1000);
});
}