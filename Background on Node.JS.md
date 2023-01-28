# Background on Node.js

## Overview

In this page, we will:

-   Discuss a bit of background behind JavaScript and Node;
-   Discuss some of the features that Node allows for.

# Background

A lot of this information is taken directly from
[Wikipedia](https://en.wikipedia.org/wiki/JavaScript#History). This is a
humorous (and somewhat satirical) interpretation of historical events.

## JavaScript's creation

In 1993, the first popular web browser with a graphical user interface Mosaic
was releaased. The lead developers of Mosaic founded the Netscape corporation,
and Netscape Navigator was released in 1994 as a more polished browser. These
pages were only static, and could not have dynamic behavior or any user
interactivity.

In order to fix this, Netscape decided to add a scripting language in the form
of Java (a collaboration with Sun Microsystems). Originally, Brendan Eich was
hired to implement the Scheme language in the meanwhile.

Avid users of either Java or Scheme know that both Java and Scheme are outright
horrible languages. For instance, here is Hello World in Java:

```java
// Hello, World! in Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

And here it is in Scheme:

```scheme
; Hello, World! in Scheme
(begin
  (display "Hello, World!"")
  (newline))
```

Scheme doesn't even have supported syntax highlighting in GitHub. Both of these
languages were _so_ bad that several other languages were designed to alleviate
their flaws:

-   For Java, Kotlin and Scala were both created as alternatives. Google
    designed Kotlin as a way to alleviate Java's biggest problem - In the direct
    words of Tony Hoare, the creator of the "null" keyword in 1965, "I call it
    my billion-dollar mistake."
-   For Scheme, DrScheme was created to simplify the learning process for the
    relatively obtuse language. DrScheme eventually became DrRacket, and the
    programming language Racket was born in an attempt to modernize the archaic
    language.

Netscape management quickly realized that rather than implementing Scheme, Eich
should design a new language with cleaner syntax. Thus, JavaScript was born.

It's a common misunderstanding to think that JavaScript is directly (or even
tangentially) related to Java - It's not, at all. The choice of the name
"JavaScript" was due to JavaScript's Java-like (or C-like) syntax, combined with
marketing ploys. The original language was called LiveScript.

In 1996, Netscape submitted JavaScript to Ecma International, and it became
standardized for all browsers. As such, ECMAScript was born, which refers to the
version of JavaScript (as of writing this guide, we're on ECMAScript 6, or ES6).

## Contenders to the party

Funnily enough, Java actually had a run for its money with the new invention of
JavaScript and the release of ECMAScript standardizations. In order to gain more
devices running Java (for the download popup), Java designed applets, in order
to content with HTML/CSS/JavaScript's user interface design.

Java applets were so bad that developers genuinely believed writing HTML and CSS
was a _good_ way to design user interfaces.

## Node: JavaScript in the server

Netscape released the first server-side JavaScript environment in 1996, called
LiveWire Pro Web. This wasn't really relevant, but in 2009 Ryan Dahl wrote
Node.js as a successor. The initial release only supported Mac OS X and Linux.

In response to the most popular web servers in 2009, the Apache HTTP Server,
Dahl released Node.js. Apache's HTTP Server had limitations on handling over
10,000 concurrent users, and programming was entirely sequential - That is, a
machine running an Apache HTTP Server could only handle a couple of instructions
at once before all other code was blocked.

Dahl intended to create a stronger structure, and Node.js was born, combining
Google's V8 JavaScript engine, an event loop, and a low-level I/O API. The event
loop is the interesting part, and we'll discuss it later.

In January 2010, Dahl introduced a package manager for simply reusing code -
This was npm. This made it easier for programmers to publish and share source
code of Node.js packages, and heavily simplified setting up more complicated
projects.

## Any alternatives?

Ryan Dahl hosted a talk in 2018 about ten things he regretted about Ndoe.js. The
initial design decisions with Node.js focusing on not using JavaScript promises,
using legacy systems, implementing a `node_modules` folder to cache imports,
leaving out file extensions, etc. were significant pain points for him.

In response to this, Dahl released Deno as a prototype during this talk.
Originally written in Go, and soon replaced with Rust, Deno was a
reimplementation of Node.js with better design decisions going into the project.
Deno was officially released on May 13th, 2020, and has been relatively popular.

# Features of Node.js and the event loop

Let's summarize - How does Node.js change up JavaScript?

Originally, JavaScript was written as a scripting language for use within HTML.
HTML tags could be utilized to embed JavaScript code within the document, where
JavaScript could then target any portion of the document and modify it.
JavaScript was even capable of modifying the CSS structure (which is also within
the document).

## Saving states

As such, JavaScript on the browser was extremely valuable. However this left
developers with a problem - JavaScript cannot store _state_. That is to say,
JavaScript cannot persist information across sessions - Once the browser is
refreshed, the _original_ JavaScript code (regardless of modifications) would
also instantly be refreshed.

Cookies were introduced as a way to save state with a browser, but one can
simply delete those to remove states. For secure applications, this was not a
viable fix. The original JavaScript code could also be rewritten and re-served,
but this still depends on another server to _handle_ that. Why not cut out the
middleman?

As such, Node.js allows for JavaScript to be run on a _server_ environment, thus
allowing it to store data. Webpages can simply request information from a server
in order to have the appearance of keeping state (while still NOT keeping
state!)

Most modern websites actually have a lot of states (or persistent data). This is
due to Node.js, and the ability to save state between sessions. Interestingly,
most websites these days are built upon popular website frameworks such as
React, Angular, Vue, or Svelte. With the exception of Vue, the other languages
utilize Node.js in some capacity and run the website as a server with states.

## The event loop

I mentioned earlier about the JavaScript event loop. One of the major fallbacks
with Apache HTTP servers were their failure of handling requests concurrently.
In particular, a request that took too long could stall out the server for
everyone.

Node.js solves this by redefining how code runs entirely. Intuitively, when you
write three lines of code, you expect them to run from top to bottom - Finishing
each instruction completely before moving onto the next one. This is how
underlying computer hardware works - A CPU will simply stall while it is
processing an instruction, as it cannot process _more_.

However, Node.js actually implements an **event loop**. Conceptually, this is an
endless loop, which waits for tasks (so, lines of code, or CPU instructions),
executes them, and spins endlessly until it receives more tasks.

For most code, this means that the tasks are basically the same. Doing math,
printing out to the console, or calling functions is done sequentially. However,
when a task takes too long (for instance, requesting a server for some
resources), the task is _started_ and placed on the event loop to execute.

Within this project we won't run into any issues with this structure. However,
it's important to note that Node.js fundamentally has this problem (or solution,
if you see it that way) - Things that take too long will _expressly not_ stall
other instructions from running (unless they're configured to, which is bad
practice!)
