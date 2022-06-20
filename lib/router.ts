import readDirRecursive from "./utils/readDirRecursive"
import path from "path"
import mapRoutes from "./router/map"

const dir = path.join(process.cwd(), "dist/routes")
const files = readDirRecursive(dir)
const paths: string[] = []

const routes = files.map(file => {
    const fileDir = path.parse(file).dir
    let fileName = path.parse(file).name
    paths.push(path.join(fileDir, fileName))

    if (fileName.startsWith("[") && fileName.endsWith("]"))
        fileName = `:${fileName.slice(1, fileName.length - 1)}`

    return path.join(fileDir, fileName)
})

const router = mapRoutes(dir, paths, routes)

export default router
