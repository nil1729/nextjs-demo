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
- **NextJS Pre-renders pages by default**

### Incremental Static Generation (ISR)

- Pre-generate Page.
- Re-generate it on every request, at most every X seconds.
  - Serve `old` page if re-generation is not needed yet.
  - Generate, store and serve `new` page otherwise.

### Pre-Generated Paths (Routes)

- Dynamic pages `([id].js etc)` don't just need data: We also need to know **which `[id]` values will be available**.
- Multiple concrete [id] page instances (e.g id = 1, id = 2 etc.) are pre-generated.
- `export async function getStaticPaths() {...}`

### Server-Side Rendering

- Sometimes , we need to pre-render for every request OR we need to access to the request object (e.g for cookies).
- NextJS allows us to run `real server-side code` as well.
- `export async function getServerSideProps() {...}`

### Client-Side Data Fetching

- Some data doesn't need to be pre-rendered
  - Data changing with high frequency (e.g. stock data)
  - Highly user-specific data (e.g. last orders in an online shop)
  - Partial data (e.g. data that's only used on a part of a page)
- Pre-fetching the data for page generation might not work or be required.
- `Traditional` client-side data fetching (e.g. `useEffect()` with `fetch()` is fine or `useSWR`)
