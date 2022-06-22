import path from "path"

export default (files: string[]) => {
    const paths: string[] = []

    const routes = files.map(file => {
        let fileDir = path.parse(file).dir
        let fileName = path.parse(file).name
        paths.push(path.posix.join(fileDir, fileName))

        fileDir = fileDir
            .split(path.sep)
            .map(file => {
                if (file.startsWith("[") && file.endsWith("]"))
                    return `:${file.slice(1, file.length - 1)}`
                return file
            })
            .join("/")

        if (fileName.startsWith("[...") && fileName.endsWith("]"))
            fileName = "*"
        else if (fileName.startsWith("[") && fileName.endsWith("]"))
            fileName = `:${fileName.slice(1, fileName.length - 1)}`

        return path.posix.join(fileDir, fileName)
    })
    return { paths, routes }
}
