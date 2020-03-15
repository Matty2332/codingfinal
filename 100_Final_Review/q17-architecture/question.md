### API Question:

Why would you want to call a third party API on the FRONTEND instead of the back end.  See Schemes A and B below.  Please discuss the advantages and disadvantages of calling APIs from front-end vs. back-end. Try to provide two or more valid answers.


### Scheme A (Client making 3rd party HTTP call):
```
 /---------                |----------|
|          |  http calls   |          |
|  browser | ------------> |    my    |
|          | ------|       |  server  |
|----------|       |       |----------|
                   |
                   |       |----------|
                   |------>|          |
                           | 3rd party|
                           |    API   |
                           |----------|

```

### Scheme B (my server making 3rd party HTTP request and then passing the value to the browser):

```

 /---------                |----------|
|          |  http calls   |          |
|  browser | ------------> |    my    |
|          | <------------ |  server  |
|----------|               |----------|
                               |  /\
                               |  |
                               |  |
                               \/ |
                           |----------|
                           |          |
                           | 3rd party|
                           |    API   |
                           |----------|

```


