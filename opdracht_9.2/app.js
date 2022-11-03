const openMonkey = document.querySelector(".open")
const closedMonkey = document.querySelector(".closed")

function Buttonclick() {
    if (closedMonkey.classList.contains("active")) {
        closedMonkey.classList.remove("active");
        openMonkey.classList.remove("open");
    } else {
        openMonkey.classList.add("open");
        closedMonkey.classList.add("active")
    }
}