---
id: xcse-modules
title: Module Types
---

***

##  Source Modules

**Source Modules** are XCSL files that are meant to be executed as program (source) code.  In source modules, all XCSL code outside of function declarations is treated as executable program code.  

For example, see the following XCSL code:
```
 let sum x y = x + y;;
  sum 1 2
```
A source module would declare function *sum*, along with its proposed behavior, into the module tree.  Then it would execute ( *sum 1 2* ) and ultimately, return 3 to the shell.

***

##  Header Modules

**Header Modules (aka Submodules)** are organizational files containing loadable XCSL functions.  They differ from *Source Modules*, as none of the code outside of function declarations is ever executed.  

Recall the previous example module:
```
 let sum x y = x + y;;
  sum 1 2
```
While a source module would execute ( *sum 1 2* ), a submodule would not.  It would **only** declare the sum function for other modules' use.  


***

##  Tether Modules

**Tether Modules** are relatively complicated to the aforementioned module types.  They are best described as software-level protocols.  They are not constantly-running active applications; rather, they offer services that can be requested by other modules.  This maintains a reasonable barrier between user applications and firmware backends.  

Tether modules must be *activated* for their services to be used.  When done with a tether module, it is best practice to *deactivate* the module.  See following example, where the file is named "TMod.xt":
```
 activate TMod

  deactivate TMod
```
Within TMod (and all other tether modules), functions can be *offered* to other modules.
```
 offer diff x y = x - y
```
Then other modules could use the following *request* to use the *diff* function.
```
 request TMod diff 2 1
```
This request would call TMod, then TMod would calculate the difference and return the result.

Though this may seem esoteric in the given examples, tether modules play a huge role in XCS multithreading.

***

##  System Modules

**System Modules** do not exist as source code within XCS; instead, they come defined within the ISO image used by the bootloader.  They can be called using the following format:
```
request System FUNCTION
```
Where *FUNCTION* is some functionality within a System Module.  These modules are typically ones that are required for XCSL to operate normally, e.g. memory allocator, process scheduler.  Below find one of the most useful system functions:
```
request System kill pid
```
Where *pid* is some process ID number.  

***
