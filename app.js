const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");
const headerNavbarList = document.querySelector(".header__navbar-list")

console.log(headerNavbarList)


btnMenu.addEventListener("click", function (){
    headerNavbarList.classList.add("header__navbar-list-mobile")
    overlay.style.display = "block";
});


btnClose.addEventListener("click", function (){
    headerNavbarList.classList.remove("header__navbar-list-mobile")
    overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
    headerNavbarList.classList.remove("header__navbar-list-mobile")
    overlay.style.display = "none";
});
