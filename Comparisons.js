//Coercion - Converting of variables from one type to another
var a = 42;
var b = "42";
b = Number(a);

if(a == b){
    console.log("Loosely True");
}
if(a === b){
    console.log("Absolutely True");
}