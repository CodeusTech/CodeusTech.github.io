---
id: xcsl-primitives
title: Literal Values
---

## Numeric Literals

### Integer Values
Integers are the backbone of XCS and are typically the most efficient data type.  They can be trivially defined as such:
```
10
```
This would form the number 10 of type *int*, a flexible datatype that represents the most contextually-efficient integer size.  

To elaborate, integers can be signed or unsigned, as well as sized (in bits).  Signed integers can be positive or negative; unsigned integers can only be positive but range twice as high in value.  It is considered best practice to use the smallest suitable integer size, because it will be the fastest in execution.

XCS offers ***Unsigned* Integer** values with the following ranges:
* 8-bit (*u8*): 0 -- 255  (2^8)
* 16-bit (*u16*): 0 -- 65,535 (2^16)
* 32-bit (*u32*): 0 -- 4,294,967,295 (2^32)
* 64-bit (*u64*): 0 -- 18,446,744,073,709,551,615 (2^64)

XCS offers ***Signed* Integer** values with the following ranges:
* 8-bit (*i8*): -128 -- 127
* 16-bit (*i16*): −32,768 -- 32,767
* 32-bit (*i32*): -2,147,483,648 -- 2,147,483,647
* 64-bit (*i64*): -9,223,372,036,854,775,808 -- 9,223,372,036,854,775,807

***

### Real Values
XCSL offers two variations of **Real Number** values (e.g. numbers with decimal points):
* Single-Precision Floating Point (*float*): 7-8 digit precision
* Double-Precision Floating Point (*double*): 15-16 digit precision

***

## Boolean Values
XCSL offers logical functionality in the form of **Boolean** values (True, False).  

Constants and other named variables can typed as *bool* values, e.g.:
```
  constant isConstant of bool = True
```

***

## Characters and Strings

XCSL provides two operators for defining ASCII literals:
* Single-Quotation Marks are used to define characters: 'A'
* Double-Quotation Marks are used to define strings: "Hello User!"

###  Escaped Characters
Special (**Escaped**) **Characters** can be defined using the backslash ('\') character.

See the following list of escaped characters:
* New-Line: '\n'
* Tab Character: '\t'

***

## Containers

### Linked Lists

**Linked Lists** are the standard containers for collections of like-type data on XCS.  They provide quick and easy ways to define and reference *lists* of numbers, letters, phrases, etc.  

See below as an example, a constructed list of integers:
```
1 : [2, 3, 4, 5]
```
This example list would include 5 elements, starting with *1* and ending with *5*.

***

### Anonymous Tuples

**Anonymous Tuples** are containers for collections of mixed-type data on XCS. Unlike other containers, each element within the tuple's type expression can be independent of other elements' types.

See below for a tuple example:
```
let odd = 1 ; "hello" ; 3.14
```

***

### Arrays

**Arrays** are similar to Linked Lists, except array entries are concatenated in memory (linked list entries are scattered in memory and dynamically linked).
