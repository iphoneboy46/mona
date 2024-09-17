function PasswordJS() {
  const signFormItemPasss = document.querySelectorAll(".form-item.pass");

  if (signFormItemPasss) {


    signFormItemPasss.forEach((signFormItemPass) => {
      const ic = signFormItemPass.querySelector(".ic");
      const ipPassword = signFormItemPass.querySelector("input");
      ic.addEventListener("click", () => {
        ic.classList.toggle("showed");
        if (ic.classList.contains("showed")) {
          ipPassword.setAttribute("type", "text");
        } else {
          ipPassword.setAttribute("type", "password");

        }
      })


    })


  }


  const signStyles = document.querySelectorAll(".signStyle .form-item-ip ");
  if (signStyles) {
    signStyles.forEach((signStyle) => {
      signStyle.addEventListener("input", (e) => {
        if (signStyle.value.length > 0 && signStyle.value != "") {
          // console.log("Ádasdasd")
          signStyle.classList.add("actived")
        } else {
          signStyle.classList.remove("actived")

        }
      })
    })
  }
}

PasswordJS()
