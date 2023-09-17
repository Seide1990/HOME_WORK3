
    var word=document.querySelector("#word");
var word_count=document.querySelector("#word_count") 
var f_words=document.querySelector("#f_words")
var wins_and_over=document.querySelector("#wins_and_over")

var array=["hangman","life","dreams","program","game","rules"];
var wins=0;
var y=array.length;
select=game(y);
// klaviaturanin basilmasi hadisesi
window.addEventListener("keyup",function(e){
    let klv=e.key;
     klv=klv.toLowerCase();
    var a=[];
    a=word.innerHTML.split("");
    for (let j=0;j<(select.length);j++){
    if(klv===select[j]){
    a[j]=klv;
}}
if(a.includes(klv)||(sehv_herf.includes(klv))){
}
else{
    sehv_herf.push(klv);
   f_words.innerHTML=sehv_herf;
}
word.innerHTML=a.join("");
reqem--;
word_count.innerHTML=reqem;

if (a.join("")===select){
    word.innerHTML=a.join("");
    wins+=1;
    wins_and_over.innerHTML="Wins "+wins;
    select=game(y)
}
if (reqem==0){

    select=game(y)
   }
   else{
   }
})
//------------------------
//tesadufi secim 
function game(y){
    var komp_secim=(Math.floor(Math.random()*y)) 
    var count=array[komp_secim].length;
    var select=array[komp_secim];
    let p_word='';
    for (i=0;i<count;i++){
    p_word+="-";}
    word.innerHTML=p_word;
    sehv_herf=[];
    f_words.innerHTML=sehv_herf;
    reqem=12;
    word_count.innerHTML=reqem;

    return  select
}





