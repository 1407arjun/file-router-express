import express from "express"
import path from "path"

const router = express.Router()

export default (dir: string, paths: string[], routes: string[]) => {
    routes.forEach((route, index) => {
        const cwd = path.relative(__dirname, dir)
        router.all(`/${route}`, require(path.join(cwd, paths[index])).default)
    })
    return router
}
