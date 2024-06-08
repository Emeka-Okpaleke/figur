const mobileNav = document.querySelector(".mobile-hamburger-container");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', function(){
    if(mobileNav.style.display === "none"){
        mobileNav.style.display = "block";
    }else{
        mobileNav.style.display = "none";
    }
});



