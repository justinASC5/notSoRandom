function random(num){
let rint = Math.floor(Math.random() * num);
console.log(rint);
}
function randomLetter(str){
let rlettr = Math.floor(Math.random() * str.length);
console.log(str[rlettr]);
}
function myGuy(gstr){
console.log(`${gstr}, my guy`);
}
function string_N_times(str2, num2){
let c = 0;    
while(c < num2){
console.log(str2);
c++;
}
}
function hypotenuse(opp, adj){
let o = Math.pow(opp,2);
let a = Math.pow(adj,2);
let hyp = Math.sqrt(o + a);
console.log(hyp);
}

random(10);
random(100);
random(2);

randomLetter("asfdefdsv");
randomLetter("chicken");
randomLetter("abcdefghijklmnopqrstuvwxyz");

myGuy("What's up");
myGuy("Take it easy");
myGuy("Yo");

string_N_times("hi", 2);
string_N_times("bye", 5);
string_N_times("ha", 10);

hypotenuse(3, 4);
hypotenuse(9, 10);
hypotenuse(12, 37);

