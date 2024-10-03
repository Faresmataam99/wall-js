let body = document.getElementById("body");
body.style.backgroundColor = "#420F18";

// let titles = document.getElementById("titles");
// titles.style.color = "white";
// titles.style.fontFamily = "Dancing Script";
// titles.style.position = "absolute";
// titles.style.margin = "100px";
// titles.style.padding = "100px";
// //today

// let square = document.getElementById("square");

// let right = document.getElementById("right");
// let left = document.getElementById("left");
// let tightens = document.getElementById("tightens");
// let stretch = document.getElementById("stretch");

// right.onclick = function () {
//   square.style.margin += 200;
// };

// left.onclick = function () {
//   square.style.margin -= 200;
// };

// tightens.onclick = function () {
//   square.style.padding -= 10;
// };

// stretch.onclick = function () {
//   square.style.padding += 50;
// };




let buttons=document.getElementsByTagName('button') 
for ( let btn of buttons) { 

    btn.onclick =function() { 

      btn.innerText ='good'
      btn.style.color='red'
} 

}
let counting=0
let go=document.getElementById ('go')
let reduce=document.getElementById('reduce')
let reset =document.getElementById ('reset')
let span=document.getElementById ('counting')

   go.onclick=function(){

counting ++;
    span.innerText =counting;
   }

   reduce.onclick=function(){
    if(counting > 0) {
        counting--;
        span.innerText = counting;
    }
   }

   reset.onclick=function(){
    counting=0
    span.innerText=counting;
   }

   let name =document.getElementById('name');
   let input =document.getElementById('input');

   input.oninput=function(){    
   
    name.innerText=input.value;
   }










       


