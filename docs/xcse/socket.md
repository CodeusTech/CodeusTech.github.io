---
id: xcse-sockets
title: Network Sockets
---


##  Socket Basics

XCS provides a built-in tether module, known as **Socket** for handling network communication.  *Socket* is an XCSE-native tether module that provides low-level networking protocols, e.g. Ethernet Drivers, Internet Protocol (IP) Addresses.  

Sockets are essentially a user interface for internet/networking within modules. Sockets allow your computer to talk to the local area network's router through **Ports**.  

*Socket* provides these commands for accessing ports:
* `open  PORT  PROTOCOL`
* `close  PORT`
* `read  PORT`
* `write  PORT  DATA`

See sections below for example uses.

***

##  UDP Sockets

XCS provides sockets for **User Datagram Protocol (UDP)** communication.  UDP is very fast, but operates with roughly 30% data loss.  It is best practice to use UDP sockets when several packets are sent in a short period, and each packet is not particularly important.  

See the following code example, which opens a UDP socket on port 80:
```haskell
  request socket_open 80 UDP
```
After the socket has been opened, any other function within the module can use the following commands to write/read data to/from the socket:
```ocaml
 request socket_write 80 data
 request socket_read  80
```
When a socket is no longer needed (or the module has concluded), the socket must be closed by the program.  This can be done like so:
```haskell
  request socket_close 80
```

***

##  TCP/IP Sockets

XCS provides **Transmission Control Protocol (TCP)** sockets for high-reliability networked communication.  Unlike UDP, TCP will detect if a packet does not go through correctly and will resend the packet.  So every TCP packet that is sent will be received by the client otherwise they are resent.  

Although resending the packet ensures the information is delivered, it has a profound impact on efficiency and security.  Flooding TCP sockets is a popular *Dedicated Denial-of-Service (DDoS)* strategy, so developers must detect/route attacks.  Infrastructural mitigation is planned but not yet developed.  

To open a socket for TCP on port 80:
```haskell
  request socket_open 80 TCP
```
Once the socket is opened, data can be written/read exactly as it is in the UDP example.  See below:
```ocaml
 request socket_write 80 data
 request socket_read  80
```
As with any other type of socket, make sure to close it at the end, so the network manager knows it is inactive.  
```ocaml
  request socket_close 80
```



***


