# JavaScript Syntax

Let's go through some JavaScript syntax. It's recommended to install some
language-specific tools to help out with this - For starters, a language syntax
highlighter helps (search through/Google VSCode extensions for some good ones!)

I also recommend installing a syntax formatter. In VSCode, one can press
`CTRL + ,` to see the settings (or File > Preferences > Settings), then search
`Format on Save` and check the box for `Editor: Format on Save`.

# The basics of the basics

JavaScript syntax is extremely similar to Java syntax by design. The following
chapters go through a bit of the JavaScript-specific things to know, as well as
some useful pointers.

## Comments

The first thing anyone should learn in a programming language is: How do I leave
notes for myself in this language? Or, in my case, how do I leave behind
schizophrenic scribbles for me to read and laugh at later?

Comments in JavaScript are similar to Java (because... they're the exact same.)

```js
// This is a single-line comment, which comments out the single line
let x = 5; // It can also go after a variable

/* This is a block comment, which works for multiple lines.
   It's super nice!
 */

/* Note:
 * While it's not necessary, people usually like to add asterisks on block
 * comments to make them look pretty.
 */
```

## Printing

The SECOND thing anyone should learn in a programming language is: How do I
print things out to the console? This is important to get feedback from the
program (or help debug it, by spamming print statements and seeing where the
program gets to before it dies).

Printing in JavaScript, or logging to the console, is done simply:

```js
console.log("This is a message!");
console.error("This is an error!");
```

There are many more functions that the console can do. The console can log the
number of times a line has been called with `console.count()`, reset said count
with `console.countReset()`, can print out information with `console.info()` as
opposed to just a generic log, etc. You can read about them
[here](https://developer.mozilla.org/en-US/docs/Web/API/console).

Note that the quotation marks in this string are double quotes - In JavaScript,
one can use single and double quotes interchangeably.

Suppose we want to print out the value of a variable. There's a few ways we can
do this:

```js
let x = 42;

console.log(x); // This simply prints out "42".

console.log("x:" + x); // This prints out "x: 42"
console.log(`x: ${x}`); // This prints out the same as above, and is neater.
```

We can use backticks to encapsulate JavaScript expressions in a string, which
helps for ease of printing.

## Semicolons

Semicolons are optional, yet recommended in JavaScript. However, if you do not
use semicolons, nobody cares (though I might cry!)

## Variables

How do we write a variable in JavaScript?

```js
let x = 42;
let y = "Thing";
var z = "Global thing";
const PI = 3.14159265;

// We can define multiple variables with the same keyword too:
let a = 10,
    b = 10,
    c = 10;
```

This code creates four variables. JavaScript is a dynamically typed language -
Variables are not directly associated with any particular value type, like
integer or float or boolean. The compiler will automatically "figure out" what
type you want and need, and allocate memory accordingly for you.

The `let` keyword defines a variable that is _local._ Generally, you should
always use `let`. The `var` keyword is a variable that is more "global" -
Whereas `let` variables are only available in the block which they're defined
in, `var` variables are available throughout the function they're declared in.
Here's an example:

```js
function test() {
    let a = 5;
    if (a > 0) {
        let b = 3;
        console.log(a + b); // Should print out a+b = 5+3 = 8
    } else {
        console.log(a - b); // Will error - Since b is not defined in this block!
    }

    if (a == 5) {
        var b = 8;
    }

    console.log(b); // Since a is 5, this code runs, and the var defines b. So,
    //  the console log will not error, since b is a var and is
    //  accessible to the entire function.
}
```

The `const` keyword indicates that a variable is constant, and cannot be
redefined or changed after creation.

## Types

We said that variables in JavaScript are dynamically typed, and the compiler
will figure out how much memory is needed for each portion. So, are there no
types in JavaScript?

There are types in JavaScript, and they're relatively flexible themselves (only
one of them really maps to direct memory). Let's look at them:

| Type      | JS `typeof` return value |
| --------- | ------------------------ |
| Null      | "object"                 |
| Undefined | "undefined"              |
| Boolean   | "boolean"                |
| Number    | "number"                 |
| BigInt    | "bigint"                 |
| String    | "string"                 |
| Symbol    | "symbol"                 |

This is very different from a language like C. If we pass in a variable of a
type listed above to teh `typeof` function in JavaScript, we get the string out
in the right column.

Really, the only types we care about in this table are `Boolean`, `Number`, and
`String`. `Boolean` refers to a `true` or `false` value. `Number` refers to any
number, such as `42`, or `3.1415`, or `-78.234`. `String` refers to... a string.

A word of caution: Try not to write code that has `Null` or `Undefined` types in
them, unless you like shooting yourself in the foot. If you do like that, then
by all means write horrible code.

As a matter of completeness, the `BigInt` type refers to integers that are
extremely big (go figure). The `symbol` type is rarely utilized, but every call
of `symbol()` returns a completely unique value (so it might be useful for
things like keys or hash identifiers).

## Arrays

What if we want to make one variable refer to a series of numbers, or strings,
or something else? We can use arrays. In JavaScript, arrays are actually
_objects_ themselves, but let's not worry about that for now.

To create an array, we can simply create it:

```js
let fruits = [];
fruits.push("banana", "apple", "peach");

console.log(fruits.length); // This prints out 3
console.log(fruits[1]); // This prints out "apple"
console.log(fruits[5]); // This does NOT crash the program, but instead returns "undefined"
```

Be careful with accessing elements in an array - Arrays will not "break" your
code if you access something that's not in the array. Instead, they'll simply
return `undefined`, and you'll be working with that `undefined` type value until
you shoot yourself in the foot later down the line.

Arrays are 0-indexed, and otherwise relatively easy to work with.

## If statements and checking things

How do we check for conditions? The syntax is extremely similar to Java:

```js
let x = 42;

if (x == 56) {
    console.log("No!");
} else {
    console.log("Yes!");
}
// The code prints out "Yes!"
```

We can negate something via the `!` operator. We can compare if things are not
equal by using `!=`. We can check less than `<`, greater than `>`, as well as
their "and equal to" counterparts `<=` and `>=`.

We can even use boolean logic, such as AND `&&`, or OR `||`.

Note: When comparing strings, it's recommended to use `===` instead of `==`. The
`===` sign means "equality without type coersion" - That is, the values have to
be equal, and the _type_ has to be equal.

What if types aren't equal? JavaScript gives some weird stuff if you mess with
edge cases:

```js
> typeof NaN
"number" // How is Not-a-Number a "number"?

> [] + []
"" // This makes no sense

> [] + {}
"[object Object]" // I believe this appends the object {} to the array?

> {} + []
0 // No clue how this one works

> true + true + true === 3
true // True has an implicit coerced integer value of 1, so 1+1+1 is 3
     //  but the === is not comparing the type of the booleans here, since the
     //  addition statement coerces the type to integer

> true - true
0 // Again, 1-1 = 0 which is correct

> true == 1
true // We see here that true does in fact have the integer value of 1

> true === 1
false // When triple equals checks type, that fails despite true having the
      //  value of 1

> (! + [] + [] + ![]).length
9 // Not even going to attempt to understand what this is doing

> 9 + "1"
"91" // An integer plus a string coerces the integer to a string

> 91 - "1"
90 // An integer minus a string coerces the string to an integer
   // Yes, this is not consistent with the prior example. No, I have no clue why

> [] == 0
true // ???
```

These lines of code illustrate why it's important to, first and foremostly, be
careful with telling JavaScript what you want out of it. They're also extremely
stupid.

## Loops, loops, loops, loops, loops, loops, loops, loops, loops, loops, loops,

Let's talk about some loops.

```js
// Each loop will run 10 times, summing 10 numbers from 0-9
let stop = 10;

// Loop 1: A simple while() loop
let i1 = 0,
    sum1 = 0;
while (i1 < stop) {
    sum += i1;
    i1++;
}

// Loop 2: Loop 1 can also be rewritten as...
let i2 = 0,
    sum2 = 0;
while (i2 < stop) {
    sum2 += i2++;
}

// Loop 3: A simple for() loop
for (let i3 = 0; i3 < stop; i3++) {
    sum3 += i3;
}

// Now sum1, sum2, and sum3 all equal 45
```

Loops are relatively easy in JavaScript. Something more valuable is iterating
through an array. We can do this in a couple of different ways:

```js
// Each loop will iterate through the array and sum the values in it
const array = [1, 2, 3, 4, 5];

// Loop 1: A simple for() loop. We could have used a while() loop, but for()
//          loops are simply easier to write
for (let i = 0, sum1 = 0; i < array.length; i++) {
    sum1 += array[i];
    // Note: Be careful here! If i exceeds the array length, we'll add an
    //        undefined, and an integer plus undefined equals NaN, which will
    //        throw away any of our future computations with that "number"
}

// Loop 2: A for-in loop. We'll iterate through all elements, which ensures that
//          we're in bounds, which alleviates the problem from the prior loop
let sum2 = 0;
for (let value in array) {
    sum2 += value;
    // This method is NOT RECOMMENDED because it works weirdly with objects in
    //  JavaScript. More on that later
}

// Loop 3: The best practice for iterating through an array
//         We pass in a function to this forEach() function. I'll talk about it
//          later, as it's a bit more complicated, but still manageable
let sum3 = 0;
array.forEach((value) => {
    sum3 += value;
});
```

## Functions (oh joy!)

Let's start getting to something useful. We can define a function in a couple of
different ways.

```js
// Each of these functions simply adds 5 to a number passed in

// Function 1: The most basic way of doing things. Simple, neat, efficient.
function func1(x) {
    return x + 5;
}
console.log(func1(5)); // Returns 10

// Function 2: Creating an "anonymous" function. Why is this necessary???
const func2 = function (x) {
    return x + 5;
};
console.log(func2(5)); // Returns 10

// Function 3: The new arrow notation introduced in ES6. Why???
const func3 = (x) => {
    return x + 5;
};
console.log(func3(5)); // Returns 10
```

The first way is simple and basic, but the other two are relatively weird. Why
are functions defined in weird ways like this?

Often times, we have to pass functions into other functions, like we did with
the `array.forEach` in the previous section. Naming all of those functions is
relatively time consuming, takes up more space, and more importantly makes it
harder to design - If we have the same name for two functions, we might
encounter conflicts.

So, we can create anonymous functions, which don't have names and are only used
in that particular locations. We can give a name to these functions by saving
the function to a variable.

It's a bit of a roundabout, and kind of demonstrates some of the inner workings
(and weirdness) of JavaScript.

Functions can also be recursive, to make more complicated loops (this is
valuable sometimes, albeit not as often):

```js
function sumUpTo(x) {
    if (x < 1) {
        return 1;
    }

    return sumUpTo(x - 1) + x;
}

console.log(sumUpTo(5)); // Returns 1 + 2 + 3 + 4 + 5 = 15
```

# Beyond the basics: The 200-level course of JavaScript

Okay, we've gotten past the basics. Let's talk about more complicated (and
lesser used) quirks of JavaScript.

## Objects, objects, everywhere!

People joke that Java is way too overfocused on objects. In my opinion,
JavaScript is _significantly_ worse.

In JavaScript, **_everything_** is an object. Well, everything excluding
operators. Other than those, everything is an object.

In particular, everything inherits (in some convoluted way) from the same object
prototype (or a couple prototypes). One can see this in the browser:

```js
> Object.getPrototypeOf("test");
String { "" } // So "test" inherits the String type

> Object.getPrototypeOf(String);
function () // And String inherits the base prototype

> Object.getPrototypeOf(42);
Number { 0 } // So 42 inherits the Number type

> Object.getPrototypeOf(Number);
function () // And Number inherits the base prototype
```

This concept can be taken to its logical extreme: Just like we can pass in
strings and numbers to functions, _so too_ can we pass in functions to other
functions. Wacky!

## JavaScript classes

**Note:** Nobody really uses classes in JavaScript. When people talk about
JavaScript objects - That is, collections of data and functions together, they
really use JSON objects.

Okay, so everything's an object. Can we make actual objects? Absolutely - We can
define our own Objects, which is basically the same as creating our own types.

```js
class Car {
    constructor(make, model, numDoors) {
        this.make = make;
        this.model = model;
        this.numDoors = numDoors;
    }
}
const accord = new Car("honda", "accord", 4);
```

We can even inherit things, to reuse code:

```js
class Sedan extends Car {
    constructor(make, model) {
        // Here, super() calls the constructor of the parent class.
        super(make, model, 4); // Suppose sedans always have 4 doors
    }
}
const accord = new Sedan("honda", "accord");
```

## JSON: An alternative to JavaScript classes

Nobody uses classes. Instead, we can use JavaScript Object Notation (JSON),
which is a WAY faster method of combining types and functions together:

```js
let car = {
    make: "honda",
    model: "accord",
    numDoors: 4,
};
```

We can even put functions in here:

```js
let test = {
    x: 5,
    myFunc: (a) => {
        return a + 5;
    },
};
```

Interestingly, you may have seen JSON elsewhere. This is because JSON is also
the most popular format for passing data in a string-like way between
programming languages. JSON is native in JavaScript and Python, but (obviously)
any functions in the JSON are not passed around.

To convert a JavaScript object (of ANY kind) to a JSON, we can simply use
`JSON.stringify`:

```js
let accord = new Sedan("honda", "accord");
let accordJSON = JSON.stringify(accord); // From the code block back in classes
// The JSON generated looks like:
// {
//     "make": "honda",
//     "model": "accord",
//     "numDoors": 4
// }

let testJSON = JSON.stringify(test); // From the prior code block
// The JSON generated looks like:
// {
//     "x": 5
// }
// Notice how the function is stripped out.
```

## Promises

If I had one word to describe the feeling of learning promises for a newbie to
JavaScript, it would be: "Hell." I'm going to attempt to make it less hell.

From Mozilla's developer documentation: "The `Promise` object represents the
eventual completion (or failure) of an asynchronous operation and its resulting
value."

In actual English: A `Promise` is a special object that one can return when
performing something that takes a while.

Let's look at some code:

```js
function printTheseThings() {
    console.log("1");

    setTimeout(() => {
        console.log("2");
    }, 1000);

    console.log("3");
}
```

The `setTimeout` function takes in a function, and runs it after the number of
ticks (in milliseconds) pass. So, in the code above, the printout for "2" will
happen after 1000 milliseconds, or 1 second. What should this code print out?

In a normal programming language, it might print out "1" "2" "3". However, in
JavaScript, the order is "1", "3", and "2".

We can rewrite this code to synchronize the 3 printout to a little above 1000
ms, but then we're adding additional wait times in our code (and that's a
horrible approach). How do promises help with this? We can "promise" that the
first portion executes, then have the second do something, then the third:

```js
function printTheseThings() {
    // The first thing doesn't need to return a Promise, it'll always be first
    console.log("1");

    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    }).then(() => {
        // Now, this one will run (after 1000 ms)
        console.log("2");

        // Now, this one will run immediately after
        console.log("3");
    });
}
```

This will execute in the right order. But... Now we have to write ALL of our
code in the `then()` block. That's annoying, so instead we can break this out
into an `async/await` chain.

In an `async` function, things can happen out of sync, and we can `await` a
result to WAIT for that to occur. Here's how we would do it:

```js
function logAfter1Second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2");
        }, 1000);
    });
}

async function printTheseThings() {
    console.log("1");

    // Now let's call the log function, awaiting that Promise to complete
    let valueToLog = await logAfter1Second();
    console.log(valueToLog); // This will occur after the wait

    console.log("3"); // This will occur after the prior console log
}
```

Neat. This will always print in the correct order.
