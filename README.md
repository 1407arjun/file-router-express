# express-fs

React-Router based file-system routing for Express.js.
```sh
npm i express-fs
```

## Usage

### Quick start
>Note that the router is extension independent, i.e. `.js` and `.ts` files are treated the same.
```js
import express from "express"
import router from "express-fs"

const app = express()
app.use("/", router)
app.listen(PORT)
```

### Routing
```sh
Examples:
index.js => /
route.js => /route
route1/route2.js => route1/route2
route1/[route2].js => route1/:route2 // { 'params': { route2 } }
route1/[route2]/[route3].js => route1/:route2/:route3 // { 'params': { route2, route3 } }
route1/[...route2].js => route1/*
```

### Handlers
> Named exports take higher preference over default exports
```js
// Named exports
export const get = (req, res, next) => {...} // Same as router.get('route', get)
export const post = (req, res, next) => {...} // Same as router.post('route', post)
// .
// .
export const del = (req, res, next) => {...} // Use 'del' instead of 'delete', same as router.delete('route', del)
// .
// .
// .
// Default export
export default (req, res, next) => {...} // Same as router.all('route', (req, res, next) => {...})
```

### Middlewares
> Export an array of middleware functions along with the handler instead of the handler alone.
```js
// Named exports
export const get = [middleware1, middleware2, ..., handler] // Same as router.get('route', middleware1, middleware2, ..., handler)
// .
// .
// Default export
export default [middleware1, middleware2, ..., handler] // Same as router.all('route', middleware1, middleware2, ..., handler)
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Read [CONTRIBUTING.md](CONTRIBUTING.md).

1. Fork the project.
2. Create your Feature Branch. (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes. (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch. (`git push origin feature/AmazingFeature`)
5. Open a Pull Request.
