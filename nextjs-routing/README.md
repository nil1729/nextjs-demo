# Next JS Routing

### What we will learn ?

- Understanding File based Routing
- Static and Dynamic Routes
- Navigating between Pages

### File based routing instead of Code based Routing

- No react-router, no in-code route definitions
- Instead: Create React Component files and let NextJS infer the routes from the folder structure
  - The special `/pages` folder

## How File based Routing Works?

```
/pages
│   index.js -> Main Stating Page (my-domain.com)
│   about.js -> About Page (my-domain.com/about)
│
└───/products
│   │   index.js -> All products page (my-domain.com/products)
│   │   [id].js -> Product Detail page (my-domain.com/products/123)

```

| File based Routing (NextJS)                                               | Code based Routing (React + React-Router)                                        |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| No extra boilerplate code required                                        | Boilerplate setup in code required (`<Switch>`, `<Route>`, ....)                 |
| Intuitive System                                                          | Straightforward but includes new components + concepts                           |
| File + folder structure (in `pages/` folder) influences routes            | File + folder setup does not matter at all                                       |
| Navigation works with `<Link>` **(next/link)** component and imperatively | Navigation works with `<Link>` **(react-router-dom)** component and imperatively |

### Project Routes

```
/pages
│   index.js -> Main Stating Page (Show featured Events)
│
└───/events
│   │   index.js -> Events Page (Show all Events)
│   │   [event_id].js -> Event Detail Page (show selected Event)
│   │   [...slug].js -> Filtered Events Page (show filtered Events)

```
