const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll("[data-tab-content]")

window.onload = function () {
  if (window.location.hash) {
    var hash = window.location.hash.substring(1) //Puts hash in variable, and removes the # character
    hash += "t"

    var tab = document.getElementById("cbt")
    tab.classList.remove("active")

    var tabContent = document.getElementById("cbt-link")
    tabContent.classList.remove("active")

    var tabHash = document.getElementById(hash)
    var contentHash = document.getElementById(hash + "-link")

    tabHash.classList.add("active")
    contentHash.classList.add("active")
  }
}
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active")
    })
    tabs.forEach((tab) => {
      tab.classList.remove("active")
    })
    tab.classList.add("active")
    target.classList.add("active")
  })
})
