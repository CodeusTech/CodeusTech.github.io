---
id: xcse-firmware
title: Firmware Interface
---


## SPI

XCS provides a standard **Serial Peripheral Interface (SPI)** interface library for developing custom SPI devices/firmware.  Only one SPI driver can be activated at once per device.


###### Import SPI Interface
```
open System "SPI"
```

###### SPI Pin Settings
```haskell
request spi_cs_high -- Sets CS pin to 'High' setting
request spi_cs_low  -- Sets CS pin to 'Low' setting
```

###### Read Data from SPI
```haskell
--  Returns u32 value from connected SPI device
request spi_read  --  Retrieves next entry after read
request spi_peek  --  Leaves entry after read
```

###### Write Data to SPI
```haskell
--  Returns/Writes u32 value to connected SPI device
request spi_write x
```

### Using SPI Driver

Once a driver is written for an SPI device, it can be enabled in the XCS shell with the following command:
```haskell
--  Note: the file MUST point to a Tether Module
file spi_driver = "driver-file-name"
activate SPI spi_driver
```

## I2C

XCS provides a standard **Inter-Integrated Circuits (I2C)** interface library for developing custom I2C devices/firmware.  Only one I2C driver can be activated at once per device.


###### Import I2C Interface
```
open System "I2C"
```

###### Read Data from I2C
```haskell
--  Returns u32 value from connected I2C device
request i2c_read  --  Retrieves next entry after read
request i2c_peek  --  Reads entry without retreiving next entry after read
```

###### Write Data to I2C
```haskell
--  Returns/Writes u32 value to connected I2C device
request i2c_write x
```

### Using I2C Driver

Once a driver is written for an I2C device, it can be enabled in the XCS shell with the following command:
```haskell
--  Note: the file MUST point to a Tether Module
file i2c_driver = "driver-file-name"
activate I2C i2c_driver
```


## UART

XCS provides a standard **Serial Peripheral Interface (UART)** interface library for developing custom UART devices/firmware.  Only one UART driver can be activated at once per device.


###### Import UART Interface
```
open System "UART"
```

###### Read Data from UART
```haskell
--  Returns u32 value from connected UART device
request uart_read  --  Retrieves next entry after read
request uart_peek  --  Leaves entry after read
```

###### Write Data to UART
```haskell
--  Returns/Writes u32 value to connected UART device
request uart_write x
```

### Using UART Driver

Once a driver is written for an UART device, it can be enabled in the XCS shell with the following command:
```haskell
--  Note: the file MUST point to a Tether Module
file uart_driver = "driver-file-name"
activate UART uart_driver
```





