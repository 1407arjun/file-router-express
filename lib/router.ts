import readDirRecursive from "./utils/readDirRecursive"
import path from "path"

let files = readDirRecursive(path.join(process.cwd(), "dist/routes"))

files = files.map(file => {
    const fileDir = path.parse(file).dir
    let fileName = path.parse(file).name

    if (fileName.startsWith("[") && fileName.endsWith("]"))
        fileName = `:${fileName.slice(1, fileName.length - 1)}`

    return path.join(fileDir, fileName)
})

console.log(files)
