/*
 3. Return the factorial of n

 f(0) = 1
 f(1) = 1
 f(3) = 6
*/
function factorial(n){
    let result = n;
    if (n === 0 || n === 1){
        return 1;
    }
    while (n > 1){
        //console.log(n);
        n--;
        result = result * n;
    }
    return result;
};