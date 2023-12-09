## Combining Readable-Writable Streams

[HOME](../README.md)

The code from the [previous section](stream-writable.md) can be made even simpler and better:

```js
const fs = require("fs");

const input = fs.createReadStream("source.txt", "utf-8");
const output = fs.createWriteStream("destination.txt");

input.pipe(output);
```

Despite the reduction in code, it works exactly the same as before.  
The `pipe()` method, available on every stream, can be used to combine one stream with another. Such chains can connect multiple streams.

This feature of the `pipe()` method is used, for example, for compressing files.

Let's import `zlib` and use its standard method responsible for compressing files. The `gzip` stream is a transforming stream: it receives one set of data, transforms it, and returns another set of data.

After creating the reading stream, let's create a stream responsible for compressing the file:

```js
const gzip = zlib.createGzip();
```

then connect the compression stream and the output stream:

```js
input.pipe(gzip).pipe(output);
```

The complete code:

```js
const fs = require("fs");
const zlib = require("zlib");

const input = fs.createReadStream("source.txt", "utf-8");
const output = fs.createWriteStream("destination.txt.gz");
const gzip = zlib.createGzip();

input.pipe(gzip).pipe(output);
```

There is a convenient way to combine multiple streams, allowing the use of a single error handler — the `pipeline` function:

```js
const fs = require("fs");
const zlib = require("zlib");
const { pipeline } = require("stream");

const input = fs.createReadStream("source.txt", "utf-8");
const output = fs.createWriteStream("destination.txt.gz");
const gzip = zlib.createGzip();

pipeline(input, gzip, output, (err) => {
  if (err) {
    // handle errors
  }
});
```
