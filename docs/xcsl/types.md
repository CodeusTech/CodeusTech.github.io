---
id: xcsl-types
title: Type Declarations
---

## Arbitrary Types

XCSL tries to emphasize modularity throughout system design, whenever possible.  This principle is largely upheld by the internal data type system, especially the concept of **Arbitrary Types**.  

Arbitrary types allow functions to be efficiently built for most generalized case.  For example:
```ocaml
let sum x y = x + y
```

While many languages require parameters to be explicitly typed, XCSL recognizes that *x* and *y* can be any type that implements addition.  This leads to a single modular *sum* function that can interchangeably add integers, real numbers, characters, and booleans.


***

## Type Aliases

It is frequently helpful to duplicate an existing type with an additional name, aka **Alias**.  This allows code to be naturally **self-documenting**.  Self-documenting code is a principle where internal functionality is made obvious via nomenclature.  See a common example below:

```ocaml
type address = int
```
**Memory addresses** are integer values, where the integer itself does not matter, but rather the value in memory it *points* to.  When working with addresses, it is better practice to label values as addresses rather than integers to distiquish memory pointers from data.


***

## Type Constructors

**Type Constructors** are used to define different instances of the same type of data.  

See the following color example:

```ocaml
type color = Red | Green | Blue | RGB of (int; int; int)
```

*Red*, *Green*, and *Blue* are all valid constructors of the color type.  Additionally, there is a constructor (*RGB*) that accepts three integer parameters.  This set of constructors allows developers to quickly use common colors, as well as form new colors by mixing red, green, and blue.


***

## Complex Types

The aforementioned type constructors built simple type instances (e.g. no *records*).  However, users are able to define **Complex Types** with records.  See the following example using a *person* type.

```ocaml
type person =
    name   : string,
    age    : int,
    height : int 
```

Then, it can be called to create specific people.

```haskell
constant jim of person = 
    name = "jim",
    age = 21,
    height = 67
```

***

