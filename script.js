const menuOpen  = document.getElementById("open-icon");
const menuClose  = document.getElementById("close-icon");
const checkOpen  = document.getElementById("checkopenMenu");
const checkClose  = document.getElementById("checkcloseMenu");
const navbar  = document.getElementById("navbar");

checkOpen.addEventListener("click",function(){

    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    navbar.style.display = "flex";

})
checkClose.addEventListener("click",function(){

    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    navbar.style.display = "none";
    navbar.setAttribute("style","")

})