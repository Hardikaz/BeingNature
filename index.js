//window.addEventListener('click', alert("Connected"));

var prev=document.getElementById("prev");

var next=document.getElementById("next");

var thumbnail=document.getElementsByClassName("thumbnail");

var hero=document.getElementById("hero");


var backgroundImg = new Array(
    "Images/bg1.jpg",
    "Images/bg2.jpg",
    "Images/bg3.jpg",
    "Images/bg4.jpg",
    "Images/bg5.jpg",
    "Images/bg6.jpg",
);
let i=0;

    next.onclick = function(){
        if(i<5){
        hero.style.backgroundImage='url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        console.log(i);
        i++;
}
}
 
prev.onclick = function(){
    if(i>0){
    hero.style.backgroundImage='url("'+backgroundImg[i-1]+'")';
    thumbnail[i-1].classList.add("active");
    thumbnail[i].classList.remove("active");
    console.log(i);
    i--;
}


}