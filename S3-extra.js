function square(x) {
    return x * x;
}
function is_even(n) {
    return n % 2 === 0;
}

//n can be all natural numbers
function fast_expt(b, n) {
    return n === 0 
    ? 1
    : is_even(n)
      ? square(fast_expt(b, n / 2)) 
      : b * fast_expt(b, n - 1);
}

//test fast_expt(2,3);

//extended to all integer powers
function fast_expt1(b, n) {
    return n < 0 
    ? 1 / fast_expt1(b, -n)
    : n === 0
    ? 1
    : is_even(n)
        ? square(fast_expt1(b, n / 2))
        : b * fast_expt1(b, n - 1);
}

//test fast_expt1(2,-4);
//currently using a recursive process.
//let's try an iterative one
function iter(exp, base, product) {
    return exp < 0
    ? iter(-exp, 1 / base, product)
    : exp === 0 
    ? product 
    : exp % 2 === 0
    ? iter(exp / 2, base * base, product)
    : iter(exp - 1, base, base * product);
}

function fast_iter(b, n) {
    return iter(n, b, 1);
}

//test fast_iter(2,-3);

