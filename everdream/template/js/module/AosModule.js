export default function AosModule() {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        offset: 0,
        duration: 500,
        delay: '200',
        easing: 'linear',
        once: true,
        mirror: true,
        disable: function() {
            return $(window).width() <= 1230;
        },
    });
}