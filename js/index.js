let iconMenu = document.querySelector(".icon-menu");
let menuClose = document.querySelector(".icon-close");
if (iconMenu != null){
    let delay = 500;//задержка
    let body=document.querySelector("body");
    let menuBody = document.querySelector(".menu__back");
    iconMenu.addEventListener("click", (e) => {
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
            menuClose.classList.toggle("_active");
    });
    menuClose.addEventListener("click", (e) => {
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
        menuClose.classList.remove("_active");
});
};
function menu_close(){
    let menuClose = document.querySelector(".icon-close");
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu__back");
    menuClose.classList.remove("_active");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");

}




let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}




new Swiper('.slider__swiper',{
  navigation: {
    nextEl: '.slider__right-icon',
    prevEl: '.slider__left-icon',
  },
})