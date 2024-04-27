function add(x,y){
    return (x+y);

}

function subtract(x,y){
    return (x-y);

}

function multiply(x,y){
    return (x*y);

}

function divide(x,y){
    return (x/y);

}

function increment(x){
    return (x+1);

}

function decrement(n){
    return (n-1);

}

function makeInt(string){
    var parsedInt = parseInt(string,10);
    
    return (parsedInt);

}

function preserveDecimal(string){
    parseFloat(string)
   
    return (string*1)
}

add(4,5);
subtract(6,3);
multiply(2,8);
divide(8,2);
increment(142);
decrement(8);
makeInt("0x2328");
console.log(preserveDecimal(8.55));





