export default function CountdownModule() {
  let timer2 = "05:01";
  const interval = setInterval(function () {
    let timer = timer2.split(":");
    let minutes = parseInt(timer[0], 10);
    let seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = seconds < 0 ? --minutes : minutes;
    if (minutes === 0 && seconds === 0) clearInterval(interval);
    seconds = seconds < 0 ? 59 : seconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $(".js-countdown").html(minutes + " minutes " + seconds + " seconds");
    timer2 = minutes + ":" + seconds;
  }, 1000);
}
