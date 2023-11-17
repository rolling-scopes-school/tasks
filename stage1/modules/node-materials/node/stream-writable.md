## Writable Stream

[HOME](../README.md)

A writable stream is the opposite of a readable stream. It is used for writing data. Data can be written to various destinations, such as the standard output stream, a file, a server response during server processing, another stream, and so on.

If we read data in chunks, it makes sense to write them in chunks as well.   
To do this, let's create a writable stream called `output`:

```js
const fs = require("fs");
const output = fs.createWriteStream("destination.txt");
```

If the file specified as the destination for our data, `destination.txt`, is not created before writing begins, it will be created automatically.   
Let's name the readable stream `input`, and for each part of the data it provides, we'll write it to the file using the `output.write()` method.

Compare the code for the writable stream with the code for the [readable stream](stream-readable.md) - they are created and used in a similar way:

```js
const fs = require("fs");

const input = fs.createReadStream("source.txt", "utf-8");
const output = fs.createWriteStream("destination.txt");

input.on("data", (chunk) => output.write(chunk));
input.on("error", (error) => console.log("Error", error.message));
```
