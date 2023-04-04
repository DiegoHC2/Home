window.addEventListener("scroll", function(){
    var menu = document.querySelector("nav");
    var logo_control = document.getElementById("Logo");
    
    
    menu.classList.toggle("ativo", window.scrollY > 30);
    logo_control.classList.toggle("sticky", window.scrollY > 30) 
})
