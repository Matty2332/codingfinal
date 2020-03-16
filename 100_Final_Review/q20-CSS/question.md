### Question

1. What are `data-` attributes good for? (100 words max)

the data- attribute allows to embed custom data attributes on HTML elements which can be used in a pages JS to create a better and custom user experience

2. Describe the difference between a cookie, sessionStorage and localStorage. (150 words max)

Local has the most storage available with no expiration.  It is cleared only through JavaScript or clearing Browser cache.
Session has more storage than a cookie but less than local.  The data in session is only stored until the browser or tab is closed.  Data is never transferred to the server.
Cookies store data that must be sent back to the server with consecutive requests.  Expiration duration varies is set from either server(usually) or client-side.  Cookies are more often for server side reading but not limited to where local and session is strictly on client-side. Size of cookies must be less than 4KB.  

