export default function CountUpModule() {

  const statistic = document.querySelector(".statistic");
  if (statistic) {
    $('.statistic_item--num .num').countUp({
      'time': 4000,
      'delay': 10
    });
  }

  


}
