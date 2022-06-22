## NextJS Data Fetching

- Blending server-side and Client-side Code

### NextJS is NOT just about Routing

- NextJS helps with building **Full stack React Apps**
- By default, NextJS **pre-renders all pages** (~ server-side rendering: SSR)

### What we will learn ?

- What is **Data Fetching** exactly?
- Static VS Server-side Page Generation
- How to Fetch Data

### Page Pre-Rendering

```
    Request -> /some-route -> Return pre-rendered page -> Good for SEO
                                        |
                        Hydrate with React code once loaded -> Page / App is interactive
```

- Two Forms of Pre-Rendering
  - Static Site Generation (SSG)
  - Server Side Rendering (SSR)

### Static Site Generation (SSG)

- Pre-generate a page (with data prepared on the server-side) **during build time**
- Pages are prepared ahead to time and can be cached by the server / CDN serving the app
- `export async function getStaticProps(context) {...}`
