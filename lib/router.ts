import express from "express"
import readDirRecursive from "./utils/readDirRecursive"
import path from "path"
import mapRoutes from "./router/map"

const dir = path.join(process.cwd(), "dist/routes")
const files = readDirRecursive(dir)

const router = express.Router()

const { paths, routes } = mapRoutes(files)

routes.forEach((route, index) => {
    const cwd = path.relative(__dirname, dir)
    const handlers = require(path.join(cwd, paths[index]))
    handlers.default && router.all(`/${route}`, handlers.default)
})

export default router
