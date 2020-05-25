function disp(n){
  document.getElementById("result").value+=n
anim(n);
}
function anim(n){
  var bn=document.querySelector(".b"+n);
  bn.classList.add("pressed")
setTimeout(function(){
  bn.classList.remove("pressed")
},100);
}
function del(){
 let p = document.getElementById("result").value
 p=p.slice(0,p.length-1)
   document.getElementById("result").value=p
}
function clr(){
   document.getElementById("result").value=""
}
function solve()
         {

             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }
          document.addEventListener("keypress",function(event){
            if(event.key>=0&&event.key<=9||event.key=="+"||event.key=="-"||event.key=="*"||event.key=="/"||event.key=="%")
            disp(event.key)
            else if(event.key=="=")
            solve()
            else if(event.key=="c")
            clr()
          });
