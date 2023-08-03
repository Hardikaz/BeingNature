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
       
        i++;
}
}
 
prev.onclick = function(){
    if(i>0){
    
    hero.style.backgroundImage='url("'+backgroundImg[i-1]+'")';
    thumbnail[i-1].classList.add("active");
    thumbnail[i].classList.remove("active");
   
    i--;
}


}

for(var x=0;x<thumbnail.length;x++)
{
    thumbnail[x].addEventListener('click', function(event) {
        var c=document.getElementsByClassName("active");
        c[0].className=c[0].className.replace("active","");
        
        
        var url=event.target.src;
        
        var n=url.substring(31,32);
       
        hero.style.backgroundImage="url(Images/bg"+n+".jpg)";
        this.className += " active";
    });


      
}
