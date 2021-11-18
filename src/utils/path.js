export function parsePath (filepath) {
  const paths = filepath.split('/')
  const base = paths[paths.length - 1]
  const filenameParts = base.split('.')
  const dirParts = paths.slice(0, -1)
  return {
    base,
    dirParts,
    dir: dirParts.join('/'),
    name: filenameParts[0],
    ext: filenameParts[filenameParts.length - 1]
  }
}
