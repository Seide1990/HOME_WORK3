
    var word=document.querySelector("#word");
var word_count=document.querySelector("#word_count") 
var f_words=document.querySelector("#f_words")
var wins_and_over=document.querySelector("#wins_and_over")

var array=["seide","arzu","zumrud","ana"];
var wins=0;
var y=array.length;
select=game(y);

var sehv_herf=[];
var reqem=12;
word_count.innerHTML=reqem;
// klaviaturanin basilmasi hadisesi
window.addEventListener("keyup",function(e){
  var a=[];
  a=word.innerHTML.split("");
    for (let j=0;j<(select.length);j++){
    if(e.key===select[j]){
    a[j]=e.key;
}

}
if(a.includes(e.key)||(sehv_herf.includes(e.key))){

}
else{
    sehv_herf.push(e.key);
   f_words.innerHTML=sehv_herf;
}
word.innerHTML=a.join("");
reqem--;
word_count.innerHTML=reqem;

if (a.join("")===select){
    word.innerHTML=a.join("");
wins+=1;
wins_and_over.innerHTML="Wins "+wins;
   sehv_herf=[];
 select=game(y)
  reqem=12;
 word_count.innerHTML=reqem;
}
if(reqem==0){
    sehv_herf=[];
select=game(y)
 reqem=12;
word_count.innerHTML=reqem;
   }
   else{
   }

})
//------------------------
//tesadufi secim 
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





