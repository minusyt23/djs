# Generator

A Generator is simply a little program working inside DJS, that outputs raw PCM data given some parameters. 

This folder consists of two files, the handler and the builder.

### The handler
The handler is exactly what it seems to be. It handles all the requests sent by the RUN part, e.g. getting PCM data or modifying generator's parameters.

### The builder
The builder transforms a special generator file format in the code that is going to be ran.