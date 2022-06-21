import express from "express"
import path from "path"

const router = express.Router()

export default (dir: string, paths: string[], routes: string[]) => {
    routes.forEach((route, index) => {
        const cwd = path.relative(__dirname, dir)
        const handlers = require(path.join(cwd, paths[index]))
        handlers.default && router.all(`/${route}`, handlers.default)
    })
    return router
}
