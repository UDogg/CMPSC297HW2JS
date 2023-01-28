// Return the first num values of the Fibonacci sequence, in a list
function fibonacci(num) {
    // Inputs: num (integer)
    // Outputs: On success, a list of num elements representing the first
    //           num values, starting with zero
    //          On failure, the boolean value false
    // The function will fail if the num input is less than 2
    // You may assume that num is always a number
    let a = [];
    let fibonacciSequence = [0, 1];
    let f = fibonacciSequence;
    if(num==1)
    {
        a = f.slice(0,1);
        return a;
    }
    else if(num==2)
    {
        a = f.slice(0,2);
        return a;
    }
    else if(num>2)
    {
        for(let i = 3;i<=num;i++)
        {
            let s = f[i-3]+f[i-2];
            f[i-1] = s;
        }
        return f;
    }
    else
    {
        return false;
    }
    
}

module.exports = fibonacci;
