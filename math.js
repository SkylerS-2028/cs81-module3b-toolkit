
function double(n){
    return 2*n;
}

function square(n){
    return n**2;
}

function isEven(n){
    if (n%2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function isOdd(n){
    if (n%2 != 0){
        return true;
    }
    else{
        return false;
    }
}

function power(x, y){
    return x**y;
}

function multiply(x, y){
    return x*y;
}

function isPrime(n){
    for(i = 2; i<n; i++){
        if(n%i === 0){
            return true
        }
        else if(i === n-1){
            return false
         }
    }
}

