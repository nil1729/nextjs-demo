## Deploying NextJS Application

- Different Deployment Options
- Configuring and Preparing teh Project
- Deployment in Action

### Deployment Options

- **Standard Build**
  - `next build`
  - Produces optimized production bundles and a server-side app: Requires NodeJS server
  - Pages are pre-rendered (if possible) but NodeJS server is required for API routes, server-side pages and page re-validations
  - Re-deploy needed if code changes or we don't use re-validations and need page updates
- **Full Static Build**
  - `next export`
  - Produces 100% static app(HTML, CSS, JS): No NodeJS server required
  - Doesn't work if our app uses API routes, server-side pages or wants to use page re-validations
  - Re-deploy needed for all code and content changes

### Deployment Steps and Considerations

- Add page metadata, optimize code, remove unnecessary dependencies
- Use environment variables for variable data (e.g. database credentials, API keys, ...)
- Do a test build and test the production-ready app locally or on some test server
