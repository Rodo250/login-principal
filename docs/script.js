const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
   container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
   container.classList.add("toggle");
});
document.addEventListener('DOMContentLoaded', function() {
    const instagramIcon = document.querySelector('ion-icon[name="logo-instagram"]');
    if(instagramIcon) {
        instagramIcon.addEventListener('click', function() {
            window.open('https://www.instagram.com/unisalamanca?igsh=NjZmZTRrd2dwNG45', '_blank');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const facebookIcon = document.querySelector('ion-icon[name="logo-facebook"]');
    if(facebookIcon) {
        facebookIcon.addEventListener('click', function() {
            window.open('https://www.facebook.com/people/Instituci%C3%B3n-Universitaria-Salamanca/100091035623816/?mibextid=ZbWKwL', '_blank');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const whatsappIcon = document.querySelector('ion-icon[name="logo-whatsapp"]');
    if(whatsappIcon) {
        whatsappIcon.addEventListener('click', function() {
            window.open('https://api.whatsapp.com/send?phone=573208345051&text=&source=&data=', '_blank');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const youtubeIcon = document.querySelector('ion-icon[name="logo-youtube"]');
    if(youtubeIcon) {
        youtubeIcon.addEventListener('click', function() {
            window.open('https://www.youtube.com/channel/UCnD7HyXswQ7w3usdMxyzePQ/featured', '_blank');
        });
    }
});
