---
id: xcs-config
title: Optimization Schemes
---

***


##  What is an Optimization Mode?

<br>**Optimization Modes** are backend configurations to be used for situational performance gains.  Developers do not need to know much about these settings other than which is best for their specific application.

##  Modes

### a64 (Default)

`a64` is the default optimization mode in XCS, because it has no constraints or other information to know.  It is suitable for any 32/64-bit application.

### a32i

`a32i` is the fastest optimization mode but has constraints:
* Removes access to *real* numbers (e.g. `3.14`) 
* Slightly reduces 64-bit integer performance (e.g. numbers > 4,294,967,296)

`a32i` is a good optimization mode for 32-bit integer-based applications.  


### a32f

`a32f` is the second fastest optimization mode but has constraints:
* *real* numbers are limited to `float` type (7-8 significant figures).
* Slightly reduces 64-bit integer performance (e.g. numbers > 4,294,967,296)


### a64sr *n*

