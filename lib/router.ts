import express from "express"
import readDirRecursive from "./utils/readDirRecursive"
import path from "path"
import mapRoutes from "./router/map"

const dir = path.join(process.cwd(), "dist")
const routeFiles = readDirRecursive(path.join(dir, "routes"))

const router = express.Router()

const { paths, routes } = mapRoutes(routeFiles)

routes.forEach((route, index) => {
    const cwd = path.relative(__dirname, dir)
    const handlers = require(path.posix.join(cwd, paths[index]))

    handlers.default && router.all(`/${route}`, handlers.default)
    handlers.get && router.get(`/${route}`, handlers.get)
    handlers.post && router.post(`/${route}`, handlers.post)
    handlers.put && router.put(`/${route}`, handlers.put)
    handlers.patch && router.patch(`/${route}`, handlers.patch)
    handlers.del && router.delete(`/${route}`, handlers.del)

    handlers.copy && router.copy(`/${route}`, handlers.copy)
    handlers.head && router.head(`/${route}`, handlers.head)
    handlers.options && router.options(`/${route}`, handlers.options)
    handlers.purge && router.purge(`/${route}`, handlers.purge)
    handlers.lock && router.lock(`/${route}`, handlers.lock)
    handlers.unlock && router.unlock(`/${route}`, handlers.unlock)
    handlers.propfind && router.propfind(`/${route}`, handlers.propfind)
})

export default router
