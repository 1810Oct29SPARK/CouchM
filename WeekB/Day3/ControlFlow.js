//incrementing, pre and post
function printNumberPlusOne(num){

    ++num; //this adds one before evaluating, num++ is post increment
    console.log(num);

    //when 'num' = 3

    //this gives 4
    console.log(num++);

    //this gives 5 (if line 10 is commented out)
    //console.log(++num);
}

//works the same with --

//for loops

//print 0-9
function forLoops(){
    for(i = 0; i < 10; i++){
        console.log(i);
    };
    let myObj = {"key1":"value1","key2":"value2","key3":"value3"};
    for (x in myObj){
        console.log(x); //this is the key
        console.log(myObj[x]); //this is the actual value
    }
}

//while loops
//this is an infinite loop
/*
while (true) {

}
*/

//myBoolean is in the global scope
//all functions can see it
//it belongs to the window object
let myBoolean = true;

// == performs type coercion - converts second arg to datatype of first arg, then compares
function funk(){
    if (myBoolean == true) {
        console.log("my boolean is true!");
    } else {
        console.log("my boolean is false!");
    }
}

//experiment with truthy and falsy
function truthyFalsy(x){
    if (x) {
        console.log(x+" is truthy");
    } else {
        console.log(x+" is falsy");
    }
}

function largestOfThree(a,b,c){
    //check whether input is of type number
    //evaluate whether the conversion to number fails for ANY inputs
    //if so, return NaN and exit function
    if (isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(c))){
        return NaN;
    }
    //ok, now we can actually do the comparison
    //we can only get to this part of the function if the if-statement condition is not satisfied
    
    //problem - what if two variables are equal and larger than the other?
    /*if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }*/

    if (a>b){
        if (b>c){
        return a;
        } else if (c>a) {
        return c;
        } else {
        return a;
        }
    }
    else {
        if (b>c){
            return b;
        } else {
            return c;
        }
    }

    /*let largest = a;

    if (b>a){
        largest = b;
    }
    if(c>largest){
        largest = c;
    }

    return largest;*/
}

function largestInArray(numArray){
    let largest = numArray[0];
    for (i = 1; i < numArray.length; i++){
        if (numArray[i] > largest){
            largest = numArray[i];
        }
    }
    return largest;
}