import fs from "fs"
import path from "path"

const files: string[] = []

export default (dir: string) => {
  const parent = dir

  const readDirRecursive = (dir: string): void => {
    fs.readdirSync(dir).forEach(file => {
      const absoultePath = path.join(dir, file)
      if (fs.statSync(absoultePath).isDirectory())
        return readDirRecursive(absoultePath)
      else return files.push(path.relative(parent, absoultePath))
    })
  }

  readDirRecursive(dir)
  return files
}
