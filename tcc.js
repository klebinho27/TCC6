var header = document.getElementById('header')
var navigationHeader = document.getElementById('navigation-header')
var content = document.getElementById('content')
var showSidebar = false; 

function toggleSidebar (){
    showSidebar = !showSidebar
    if(showSidebar){
        navigationHeader.style.marginLeft = '-10vw'
        navigationHeader.style.animationName = 'showSidebar'
        content.style.filter = 'blur(3px)'
    }
    else{
        navigationHeader.style.marginLeft = '-100vw'
        navigationHeader.style.animationName = '';
        content.style.filter = ''
    }
}

function closeSidebar(){
    if(showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
})

//card carrosseç

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

//card carrossel2

const controls2 = document.querySelectorAll(".control2");
let currentItem2 = 0;
const items2 = document.querySelectorAll(".item2");
const maxItems2 = items2.length;

controls2.forEach((control2) => {
  control2.addEventListener("click", (e) => {
    isLeft2 = e.target.classList.contains("arrow-left2");

    if (isLeft2) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 1;
    }

    if (currentItem2 >= maxItems2) {
      currentItem2 = 0;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item2) => item2.classList.remove("current-item2"));

    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items2[currentItem2].classList.add("current-item2");
  });
});
