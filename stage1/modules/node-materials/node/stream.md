## Streams

[HOME](../README.md)

![stream schema](https://pawelgrzybek.com/photos/2020-07-14-1.png)

When working with a significant amount of data, processing it all at once can lead to loading the entire dataset into memory and freezing the program for the entire duration of the operation.

Instead of this, reading and writing data can be done in parts, small fragments called `chunks`. This approach allows working with very large volumes of data without proportionally increasing the memory consumption.

Streams use an event-driven interface, inherited from `EventEmitter`.

In addition to using existing streams, we can create our own streams by inheriting from basic classes and implementing some mandatory methods.

For working with stream data in Node.js, there is an abstract interface — streams.

In Node.js, there are 4 main types of streams:

- [Readable](stream-readable.md) — a readable stream used for reading data
- [Writable](stream-writable.md) — a writable stream used for writing data
- Duplex — a stream that can be used for both reading and writing data
- Transform — a type of `Duplex` used for data transformation
