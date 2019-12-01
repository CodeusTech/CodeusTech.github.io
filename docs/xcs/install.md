---
id: xcs-install
title: Installation
---

***


## Flashing SD Card

First, acquire the XCS image (xcs-aarch64.iso) from [codeus.tech](../../index.html) or somewhere else.  

### Windows

Windows users should use [Etcher](https://etcher.download/) to write `xcs-aarch64.iso` to MicroSD card.

### Linux

On a Linux computer, navigate to the directory containing the image file. (We'll assume it's ~/Downloads)
```
[... ~]$ cd Downloads
```

<br>

Make sure your MicroSD card is plugged into your Linux computer. Use the *lsblk* command to determine which device is linked to the MicroSD (*/dev/sdx*) 
```
[... Downloads]$ lsblk
```
Once you are sure, install XCS to MicroSD:
```
[... Downloads]$ sudo dd if=xcs-aarch64.iso of=/dev/sdx
```
