export default function FormModule() {
  var thumbsize = 14;

  function draw(slider, splitvalue) {
    /* set function vars */
    var min = slider.querySelector(".min");
    var max = slider.querySelector(".max");
    var lower = slider.querySelector(".lower");
    var upper = slider.querySelector(".upper");
    var legend = slider.querySelector(".legend");
    var thumbsize = parseInt(slider.getAttribute("data-thumbsize"));
    var rangewidth = parseInt(slider.getAttribute("data-rangewidth"));
    var rangemin = parseInt(slider.getAttribute("data-rangemin"));
    var rangemax = parseInt(slider.getAttribute("data-rangemax"));

    /* set min and max attributes */
    min.setAttribute("max", splitvalue);
    max.setAttribute("min", splitvalue);

    /* set css */
    min.style.width =
      parseInt(
        thumbsize +
          ((splitvalue - rangemin) / (rangemax - rangemin)) *
            (rangewidth - 2 * thumbsize)
      ) + "px";
    max.style.width =
      parseInt(
        thumbsize +
          ((rangemax - splitvalue) / (rangemax - rangemin)) *
            (rangewidth - 2 * thumbsize)
      ) + "px";
    min.style.left = "0px";
    max.style.left = parseInt(min.style.width) + "px";
    min.style.top = lower.offsetHeight + "px";
    max.style.top = lower.offsetHeight + "px";
    legend.style.marginTop = min.offsetHeight + "px";
    slider.style.height =
      lower.offsetHeight + min.offsetHeight + legend.offsetHeight + "px";

    /* correct for 1 off at the end */
    if (max.value > rangemax - 1) max.setAttribute("data-value", rangemax);

    /* write value and labels */
    max.value = max.getAttribute("data-value");
    min.value = min.getAttribute("data-value");
    lower.innerHTML = min.getAttribute("data-value");
    upper.innerHTML = max.getAttribute("data-value");
  }

  function init(slider) {
    /* set function vars */
    var min = slider.querySelector(".min");
    var max = slider.querySelector(".max");
    var rangemin = parseInt(min.getAttribute("min"));
    var rangemax = parseInt(max.getAttribute("max"));
    var avgvalue = (rangemin + rangemax) / 2;
    var legendnum = slider.getAttribute("data-legendnum");

    /* set data-values */
    min.setAttribute("data-value", rangemin);
    max.setAttribute("data-value", rangemax);

    /* set data vars */
    slider.setAttribute("data-rangemin", rangemin);
    slider.setAttribute("data-rangemax", rangemax);
    slider.setAttribute("data-thumbsize", thumbsize);
    slider.setAttribute("data-rangewidth", slider.offsetWidth);

    /* write labels */
    var lower = document.createElement("span");
    var upper = document.createElement("span");
    lower.classList.add("lower", "value");
    upper.classList.add("upper", "value");
    lower.appendChild(document.createTextNode(rangemin));
    upper.appendChild(document.createTextNode(rangemax));
    slider.insertBefore(lower, min.previousElementSibling);
    slider.insertBefore(upper, min.previousElementSibling);

    /* write legend */
    var legend = document.createElement("div");
    legend.classList.add("legend");
    var legendvalues = [];
    for (var i = 0; i < legendnum; i++) {
      legendvalues[i] = document.createElement("div");
      var val = Math.round(
        rangemin + (i / (legendnum - 1)) * (rangemax - rangemin)
      );
      legendvalues[i].appendChild(document.createTextNode(val));
      legend.appendChild(legendvalues[i]);
    }
    slider.appendChild(legend);

    /* draw */
    draw(slider, avgvalue);

    /* events */
    min.addEventListener("input", function () {
      update(min);
    });
    max.addEventListener("input", function () {
      update(max);
    });
  }

  function update(el) {
    /* set function vars */
    var slider = el.parentElement;
    var min = slider.querySelector("#min");
    var max = slider.querySelector("#max");
    var minvalue = Math.floor(min.value);
    var maxvalue = Math.floor(max.value);

    /* set inactive values before draw */
    min.setAttribute("data-value", minvalue);
    max.setAttribute("data-value", maxvalue);

    var avgvalue = (minvalue + maxvalue) / 2;

    /* draw */
    draw(slider, avgvalue);
  }

  var sliders = document.querySelectorAll(".min-max-slider");
  sliders.forEach(function (slider) {
    init(slider);
  });

  $(".js-review").on("click", "li", (e) => {
    const currentTarget = $(e.currentTarget);

    // Remove the 'is-current' class from all li elements
    $(".js-review li").removeClass("is-current");

    // Add the 'is-current' class to the clicked li element and all li elements before it
    currentTarget.prevAll("li").addBack().addClass("is-current");

    // Count the number of li elements with class 'is-current'
    const count = $(".js-review li.is-current").length;

    // Update the value of the hidden input with the count
    $("#starValue").val(count);
    console.log(count);
  });

  const stepPayment = $(".js-step-payment");
  const listContent = stepPayment.find(".js-step-page");

  stepPayment.on("click", ".js-step-btn", (e) => {
    e.preventDefault();

    let errors = [];
    stepPayment
      .find(".woocommerce-billing-fields p.validate-required input")
      .each(function () {
        const $this = $(this);
        if ($this.val().trim() == "") {
          errors.push($this);
          let $text = $this.closest("p.validate-required").find("label").text();
          console.log($text);
          if (!$this.next(".error").length) {
            $this.after('<span class="error">Enter a ' + $text + "</span>");
          }
        } else {
          const index = errors.indexOf($this);
          if (index > -1) {
            errors.splice(index, 1);
          }
          $this.next(".error").remove();
        }
      });

    // Nếu không có lỗi mới thực hiện chuyển trang
    if (errors.length == 0) {
      const currentBtn = $(e.currentTarget);
      const currentPage = currentBtn.data("page");
      const currentContent = $(listContent[currentPage - 1]);
      listContent.not(currentContent).removeClass("is-show");
      currentContent.addClass("is-show");
     
    }
  });
}
