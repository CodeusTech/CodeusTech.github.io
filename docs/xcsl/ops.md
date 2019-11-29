---
id: xcsl-ops
title: Arithemic/Logical Operations
---


## Arithmetic

For the purpose of demonstration, all literal arithmetic will result in the value: `8`

### Addition
```haskell
4 + 4     --  Returns Sum of LEFT and RIGHT arguments (addition)
```

### Subtraction
```haskell
11 - 3    --  Returns Difference of LEFT and RIGHT arguments (subtraction)
```

### Multiplication
```haskell
4 * 2     --  Returns Product of LEFT and RIGHT arguments (multiplication)
```

### Division (Quotient)
```haskell
16 / 2    --  Returns Quotient of LEFT and RIGHT arguments (division)
```

### Division (Remainder)
```haskell
17 % 9     --  Returns remainder of LEFT and RIGHT arguments (division)
```

***

## Bitwise Operations

For the purpose of demonstration, all bitwise arithmetic will result in the value: `8`

### Shift Bits Left
```haskell
1 << 3     --  Shifts 1 LEFT 3 bits
```

### Shift Bits Right
```haskell
16 >> 1    --  Shifts 16 RIGHT 1 bits
```

### Bitwise And
```haskell
15 & 8    --  Performs Bitwise AND on arguments
```

### Bitwise Or
```haskell
8 | 0    --  Performs Bitwise OR on arguments
```

### Bitwise Exclusive Or (Xor)
```haskell
15 ^ 7    --  Performs Bitwise EXCLUSIVE OR on arguments
```

***

## Logical Operations

Logical operations always result in `True` or `False`. For demonstration purposes, the result of all literal operations will be `True`.

### Logical And
```haskell
True && True    --  Returns 'True' if both arguments are True
```

### Logical Or
```haskell
True || False   --  Returns 'True' if either argument is True
```

### Logical Xor
```haskell
False ^^ True   --  Returns 'True' if arguments are different
```

### Less Than
```haskell
3 < 5           --  Returns 'True' if LEFT arg. is less than RIGHT arg.
```

### Less Than or Equal To
```haskell
5 <= 5          --  Returns 'True' if LEFT arg. is less than or equal to RIGHT arg.
```

### Greater Than
```haskell
7 > 5           --  Returns 'True' if LEFT arg. is greater than RIGHT arg.
```

### Greater Than or Equal To
```haskell
6 >= 6          --  Returns 'True' if LEFT arg. is greater than or equal to RIGHT arg.
```

### Equal To

```haskell
False == False  --  Returns 'True' if arguments are equivalent
1 == 1
```


### Not Equal To
```haskell
True != False   --  Returns 'True' if arguments are not equivalent
1 != 2
```

***

## List and String Operations

For purpose of demonstration, each string operation will result in "Hello User!".


### Construction
```haskell
'H' :: "ello User!"                 --  Builds a list from head and tail arguments
```

### Head / Tail
```haskell
hd ["Hello User!", "Goodbye User!"] --  Returns first element of a list (head)
tl "0Hello User!"                   --  Returns a new list without head (tail)
```


### Concatenation
```haskell
"Hello " ++ "User!"                 --  Builds a new string from right/left arguments
```


***
