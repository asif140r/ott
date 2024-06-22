const menu = document.querySelector(".menu");
const list = document.querySelector(".list")

function changeIcon(icon){
    list.classList.toggle("active");
    icon.classList.toggle("fa-times")
}