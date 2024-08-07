feat: Implement middleware for request counting, rate limiting, and error handling
This commit introduces changes to the middleware files within the 'week-3/01-middlewares' directory:

- In '01-requestcount.js', a middleware function 'countRequests' has been implemented to maintain a count of the number of requests made to the server. This middleware increments the 'requestCount' variable for each incoming request.

- In '02-ratelimitter.js', a middleware function 'requestLimiter' has been added to limit the number of requests per user. It tracks the number of requests made by each user and responds with an error message if the request limit is exceeded.

- In '03-errorcount.js', a global error handler middleware has been added to increment the 'errorCount' variable whenever an error occurs in the application.