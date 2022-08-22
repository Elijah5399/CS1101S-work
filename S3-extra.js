//n can be all natural numbers
function fast_expt(b,n) {
    return n <= 1 ?
    b :
    n % 2 === 0 ?
    fast_expt(b,n/2) * fast_expt(b,n/2):
    b * fast_expt(b,n-1);
}

//test fast_expt(2,3);

//extended to all integer powers
function fast_expt1(b,n) {
    return math_abs(n) === 1 ?
    math_pow(b,n) :
    n % 2 === 0 ?
    fast_expt1(b,n/2) * fast_expt1(b,n/2):
    b * fast_expt1(b,n-1);
}

//test fast_expt1(2,3);
//currently using a recursive process.
//let's try an iterative one
function expt_iter(b,n,current_value,expo_count) {
    return expo_count === n + 1 ?
    current_value:
    n % 2 === 1 ?
    expt_iter(b,n-1,b,expo_count+1):
    expt_iter(b,n,math_pow(b,2),expo_count*2);
}

expt_iter(3,3,1,1);