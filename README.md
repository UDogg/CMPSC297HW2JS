# CMPSC 297 Homework 2

_Due: January 26th, 2023_

Welcome to week two of CMPSC 297. In the last week we wrote some basic
JavaScript to run in the browser, and installed Node.JS. This week, we'll
actually _use_ Node.JS.

This is the first week where we'll have a bit of "recommended" reading. It's not
required, but we **_highly_** recommend that you read through the two markdown
files in the `./reading` folder. They take you through a bit of the history of
JavaScript, Node, and some important syntax on JavaScript (some of which will be
valuable for this week's homework!)

The project is more or less set up for you, though I'll detail how one creates a
Node.JS project and runs it.

## A quick setup guide for Node.JS projects

Assuming you already have Node.JS installed in your favorite editors, the way
one sets up a Node.JS project is simple. Pick a folder, initialize NPM, and then
run it.

Simply create a project folder, where you'll keep your project. Then, in a
command line for that folder, type:

```bash
$ npm init
```

The command line will ask you to fill in some information. You don't need to,
and can simply spam the enter key until it stops. A `package.json` file will be
created for you within your folder.

### Looking at the `package.json` file

Not a lot is valuable here, but there's a couple of important lines:

```json
{
    ...
    "main": "index.js",
    "scripts": {
        ...
    },
    ...
    "dependencies": {
        ...
    }
}
```

As this is a JSON file, the ordering of things does not matter. Importantly,
`dependencies` will get updated as we install packages (other people's code that
we can use to speed up our own programming). The `"main"` tag should point to
our entry file, or the code file that runs first when we try to run our project.

We'll call our entry file `index.js`. Create one in the same folder as
`package.json`.

### In our `index.js`: Hello World

We can simply write out the following code:

```js
// In ./index.js

console.log("Hello, World!");
```

This is the same exact syntax as before. How do we run it?

We can write, in the command line, `node index.js`. We can also set up an NPM
script to do it, back in our `./package.json` file:

```json
{
    ...
    "scripts": {
        "start": "node --harmony index.js"
    }
    ...
}
```

Then, in the command line, we can type `npm start`. Your command line should
print out "Hello, World!"

### In our `index.js`: Importing other code files

Each of the individual files represents a different deliverable. As such, you'll
be working with the JavaScript files in the `./src/` directory, and importing
them to the index and running them.

The `./index.js` file will contain a bit of tester code for you. The command
line should print out a score that you'll receive on the homework, so all you
have to do is implement the functions within the `./src/` files. How convenient!

The way this is done is via node modules. Basically, each code file has a
function that's exported via the `module.exports` keyword, and this export can
be consumed in the `index.js` file. You can see how it's implemented in the
files provided.

## Deliverables

### `fibonacci(num)` (40 points)

Implement the function `fibonacci(num)` that, given the number input `num`,
returns the list of the first `num` fibonacci numbers.

If any errors in the input are there, return false.

Optionally, if you want to challenge yourself, try to do it in a recursive way!

### `convertRGBtoHSV(rgb)` (30 pts)

Given an RGB value (as a list of numbers), convert it to HSV and return a list
of three hue, saturation, and value numbers. We recommend using the following
library via NPM: [rgb-hsv](https://www.npmjs.com/package/rgb-hsv).

Simply install it via `npm install rgb-hsv`. Then, implement it like the
example.

### `dictionaryLookup(key, dict)` (30 pts)

Given a dictionary and a lookup item, return the value within the dictionary at
the lookup. If the item doesn't exist, return `False`.

## What you'll be graded on

Similar to HW1, you'll be graded on having all of the JS files as instructed, as
well as the correctness of the JS files. If your command line prints out a
100/100, then you'll get that score, or something extremely close to it.

The tests we'll run are **different** from your tests, so if you pass the
current tests, you should be fine. However, if you write your code such that
they'll only pass the tests given, then you might lose points. We strongly
encourage you add your own tests (similar to how they're done in `./index.js`).

Make sure your files are within the same folders that we have them.
