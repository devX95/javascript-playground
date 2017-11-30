function isPrime(num) {
    var isPrime = false;
    for(var i = 2; i <= num/2; i++){
        var remainder = num % i;
        if(remainder != 0){
            isPrime = true;
        } else {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

var num = 2000000;
var sum = 2 + 3;

for(var i = 4; i<num; i++){
    if(isPrime(i)){
        sum = sum + i;
    }
}

console.log(sum);
