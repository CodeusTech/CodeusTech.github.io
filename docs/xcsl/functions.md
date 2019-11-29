---
id: xcsl-functions
title: Functional Declarations
---

## Declaring Functions

Users can write custom functions with the *let* keyword.  See example below:
```haskell
let three = 1 + 2
```
Any subsequent calls of the *three* function would result in the addition, and ultimately the integer value 3.

***

## Function Parameters
 more contextually-global
Functions can have an arbitrary number of parameters (up to 255).  Each parameter has a name, type, and associated real-time value.  See the following example:
```haskell
let sum x y = x + y
```
After this function declaration, *sum* can be called with two addable parameters.
For example, If the following function was invoked, the result would be returned as 15:
```ocaml
sum 5 10
```
This instance used integers, but the sum function could easily handle floats, characters, and booleans as well.

***

## Type Checking

Let's review the sum function again.
```haskell
let sum x y = x + y
```

In this example, *x* and *y* can be any type that is implemented as a **operand of addition**.  The *sum* function's return value can be of any type that is a valid **result of addition**.

***

## Overloading Functions

Functions can always be *overloaded*, though there can only ever be a single unique function declaration for each parameter set.  However, there can be any number of functions with a shared name, so long as the sets of their parameter types are all mutually exclusive.

See below for a practical example. 

```haskell
let calculate x = x % 3;;

let calculate x = x / 3.14 
```

Let's review the two definitions of *calculate*.  In the first calculate definition, x is used in modulus, so it *must* be an integer.  In the second definition, x can be any real number type (e.g. *float*, *double*).  

This is a totally valid way to define multiple functionalities for a single function identifier, without signficantly losing runtime efficiency.

***

## Local Functions

Local functions are one-scope-use function declarations.  In other words, these declarations are able to be used once, and then the identifier reverts to its previous meaning.  In common lingo, this means local functions temporarily *override* global function declarations.

This concept is easiest explained through example.  See the declarations below:

```haskell
 let funct = 1;;

 let funct = 2 in
  funct
```

So what's the difference between these two expressions?  Let's explore what happens during each of these.  The first expression declares a function with no parameters named *funct*, equal to 1.  The second expression declares a *local* function named *funct* that is temporarily equal to 2, then invokes the **local** function.  

In all subsequent code in the module, *funct* would equal 1.  


***
