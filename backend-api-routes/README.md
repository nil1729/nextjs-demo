## API Routes

- What are API Routes ?
- Adding and Using API Routes
- Working with Requests and Responses

### What are API Routes ?

- URL(s) that **don't return pages (HTML)** but instead **provide a (REST) API**.
- Requests are typically not sent by entering URL in browser but via JavaScript Code (Ajax)
- ```
    /api/feedback      ->  POST  -> Send request to store feedback
    /api/feedback      ->  GET   -> Send request to get all feedback
    /api/feedback/f1   ->  GET   -> Send request to get feedback by id
  ```
