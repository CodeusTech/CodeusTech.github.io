---
id: xcsl-tethers
title: Tether Operations
---


## Tether Rules

**Process Tethers** are conceptual bonds that allow two concurrently active source modules to communicate.  For two (or more) modules to form a tether, they must abide by the following rules:
* 1.) Tethers must be formed at **instant** of execution between source modules
* 2.) Source Modules can arbitrarily form tethers with Tether Modules
* 3.) Tether Modules cannot form tethers with non-system modules

***

## Forming Tethers

The best practice for forming tethers between modules is to use a **Wrapper Function**.  An example wrapper might look like:
```
 tether Module1 Module2 Module3
```
This function will trigger *Module1-3* to all run simultaneously on separate threads.  It will also inform the process scheduler that these three modules should be ran as a tethered *Swarm*.

 * 1.) Modules can communicate with any other member of a mutual swarm.  
 * 2.) Modules can be in any number of swarms, concurrently.  
 * 3.) Modules can allow multiple active instances or restrict to a single concurrent instance.  
 
***

### Sending Messages

To send a message to a different module within a swarm, use the following XCSL functionality:
```
 send KEY DATA
```
Data can be arbitrarily typed; it will be type-checked when the message enters the process scheduler.  

See the following example:
```haskell
 send t3xtMe55Ag3 "Hello, Friend!"
```


***

### Receiving Messages

XCSL implements a complimentary keyword (*receive*) for catching data from another module's *send* function.  For example, a second module would be able to *receive* the string sent in the previous message.
```
 print (receive t3xtMe55Ag3)
```
The *receive* keyword can determine the data type of a *send* through use-case context.  The XCSL function above would result in the following standard output.
```bash
Hello, Friend!
```

***
