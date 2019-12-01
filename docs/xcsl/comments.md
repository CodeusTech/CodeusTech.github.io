---
id: xcsl-comments
title: Documentation
---

##  Comments

XCSL implements three means for documentation:
* Line Comments
* Block Comments
* Reference Guides

### Line Comments

```haskell
--  This is a Line Comment
--  It disables all text until a new line is encountered
```

### Block Comments

```ocaml
(*
  Block 
  comments
  disable
  many 
  lines
*)
```

### Reference Guides

A **Reference Guide** is a flexible comment in front of a declaration (e.g. [Functional](xcsl-functions.html) or [Type](xcsl-types.html) Declaration.

The purpose of a reference guide is usually different depending on the phase of a project.
* In early stages, they can be used for stub (outline) planning. 
* In later stages, they can be used for debugging identifiers. 
* At release, they can be used to provide manual entries to the user.

```ocaml
(*!
  Reference Guides provide helpful information about a subsequent declaration
*)
let foo = 1
```

After a declaration is made, the reference guide can be printed to the native terminal for an identifier as such:
```python
@foo
```


