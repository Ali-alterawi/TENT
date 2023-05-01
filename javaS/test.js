let img11 = document.getElementById("img-1-1");
let img12 = document.getElementById("img-1-2");
let img13 = document.getElementById("img-1-3");
let img14 = document.getElementById("img-1-4");
let img21 = document.getElementById("img-2-1");
let img22 = document.getElementById("img-2-2");
let img23 = document.getElementById("img-2-3");
let img31 = document.getElementById("img-3-1");
let img32 = document.getElementById("img-3-2");
let img33 = document.getElementById("img-3-3");

let all = document.getElementById("all");
let edo = document.getElementById("edo");
let qso = document.getElementById("qso");
let ido = document.getElementById("ido");

// add active class to selected list item
let list = document.querySelectorAll(".list-unstyled li");
function activeLink() {
    list.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  }
  
  list.forEach((item) => item.addEventListener("click", activeLink));

function showEDO(){
    img21.style.display = 'none'
    img22.style.display = 'none'
    img23.style.display = 'none'
    img31.style.display = 'none'
    img32.style.display = 'none'
    img33.style.display = 'none'
    edo.className = "active"
    img11.style.display ='unset'
    img12.style.display ='unset'
    img13.style.display ='unset'
    img14.style.display ='unset'
}

function showQSO(){
    img11.style.display ='none'
    img12.style.display ='none'
    img13.style.display ='none'
    img14.style.display ='none'
    img31.style.display ='none'
    img32.style.display ='none'
    img33.style.display ='none'
    qso.className = "active"
    img21.style.display = 'unset'
    img22.style.display = 'unset'
    img23.style.display = 'unset'
}
function showIDO(){
    img11.style.display ='none'
    img12.style.display ='none'
    img13.style.display ='none'
    img14.style.display ='none'
    img31.style.display ='unset'
    img32.style.display ='unset'
    img33.style.display ='unset'
    ido.className = "active"
    img21.style.display = 'none'
    img22.style.display = 'none'
    img23.style.display = 'none'
}
function showAll(){
    img11.style.display ='unset'
    img12.style.display ='unset'
    img13.style.display ='unset'
    img14.style.display ='unset'
    img31.style.display ='unset'
    img32.style.display ='unset'
    img33.style.display ='unset'
    img21.style.display = 'unset'
    img22.style.display = 'unset'
    img23.style.display = 'unset'
}
