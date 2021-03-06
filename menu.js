const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option")

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"))

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText

    optionMenu.classList.remove("active")
  })
})
