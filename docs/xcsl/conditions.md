---
id: xcsl-conditions
title: Conditional Expressions
---

***

## if then else

**if ... then ... else ...** statements are designed to efficiently route program flow/functionality, via boolean logic, to one of two paths.  These are generally decided by logical and numeric comparisons.

Examine the following block of code:
```ocaml
if a <= b
    then  True
    else  False
```
If the value of '*a*' is less than the value of '*b*', the entire clause will return *True*.  Otherwise, the clause will return *False*.
This can be used to control the behavior of a function under variable situations.
***

## match with

**match ... with ...** statements are designed to efficiently route program flow/functionality to one of many paths.  These are typically used for handling more complex cases than *if ... then ... else ...* statements.

Examine the following code:
```ocaml
match x with 
    True    -> 1,
    "Hello" -> 2,
    Int y   -> y;;
```
This *match* statement filters *x* into one of three integer values.  Through the magic of arbitrary typing, *x* can be any type that provides a constructor for Booleans (*True*), Strings (*"Hello"*), and Integers (*Int y*).  The result of a match case is constrained to a single type or typeclass; in this example, it resulted in an integer.  


For a more practical example, see this function that sorts a color variable into the correct RGB (Red/Green/Blue) unit vector:
```ocaml
match color 
  with 
    Red   -> RGB 1 0 0
    Green -> RGB 0 1 0
    Blue  -> RGB 0 0 1 
```

***

## is

**... is ...** statements are quickhand type/constructor equivalence checkers.  If the left-hand-side variable matches the right-hand-side type/constructor, the enture statement returns *True*, otherwise it returns *False*.

For the next examples, assume '*b*' is a constant of type *color*, and constructor *Blue*.  The examples would both return *1*.
```python
if b is color
  then 1
  else 0
```

```python
if b is Blue
  then 1
  else 0
```

***


