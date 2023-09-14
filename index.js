
    var word=document.querySelector("#word");
var word_count=document.querySelector("#word_count") 
var f_words=document.querySelector("#f_words")
var wins_and_over=document.querySelector("#wins_and_over")
var array=["seide","arzu","zumrud","ana"];
var y=array.length;
select=game(y);
var reqem=12;
word_count.innerHTML=reqem;
var sehv_herf=[];
window.addEventListener("keyup",function(e){
  var a=[];
  a=word.innerHTML.split("");
  console.log(a)
    for (let j=0;j<(select.length);j++){
if(e.key===select[j]){
    a[j]=e.key;
}

}
if(a.includes(e.key)||(sehv_herf.includes(e.key))){

}
else{
    sehv_herf.push(e.key);
   // f_words.innerHTML+=e.key+',';
   f_words.innerHTML=sehv_herf;
}
console.log(a)
word.innerHTML=a.join("");
reqem--;
word_count.innerHTML=reqem;

if (a.join("")===select){
    console.log(a.join(""))
    word.innerHTML=a.join("");
    console.log("you win")
    
    document.getElementById("wins_and_over").style.color= "green";
   sehv_herf=[];
 select=game(y)
  reqem=12;
 word_count.innerHTML=reqem;
 document.getElementById("wins_and_over").style.color = "white";
}
if(reqem==0){
    console.log('game over');
    wins_and_over.innerHTML="GAME OVER"
    sehv_herf=[];
    document.getElementById("wins_and_over").style.color= "red";
   let again=confirm('yeniden oynamaq isterdinizmi?');
   if (again){
select=game(y)
sehv_herf=[];
 reqem=12;
word_count.innerHTML=reqem;
   }
   else{
   }
}
})
function game(y){
    var komp_secim=(Math.floor(Math.random()*y))
    console.log(komp_secim);
    
    var count=array[komp_secim].length;
    var select=array[komp_secim];
    let p_word='';
    for (i=0;i<count;i++){
    p_word+="-";}
    word.innerHTML=p_word;

    return  select
}





