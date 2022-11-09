export const convert = (jevko) => nodes(jevko)

const string = (jevko) => {
  const {subjevkos, suffix} = jevko
  if (subjevkos.length === 0) return suffix
  throw Error('Text node or attribute value cannot have children.')
}

const nodes = (jevko) => {
  let mode = 'tag'

  const children = []
  
  const {subjevkos, suffix} = jevko

  let part

  for (const {prefix, jevko} of subjevkos) {
    if (prefix !== '') children.push(prefix)
    if (mode === 'tag') {
      const tag = jevko.suffix.trim()
      const attributes = Object.create(null)
      const subs = jevko.subjevkos
      for (const {prefix, jevko} of subs) {
        const key = prefix.trim()
        const value = string(jevko)
        if (key in attributes) throw Error(`Duplicate attribute '${key}' in ${tag}.`)
        attributes[key] = value
      }
      if (tag.endsWith('/') === false) {
        mode = 'body'
        part = {
          tag,
          attributes,
        }
      } else children.push({
        tag,
        attributes,
        children: []
      })
    } else {
      children.push({
        ...part,
        children: nodes(jevko)
      })
      mode = 'tag'
    }
  }

  if (suffix !== '') children.push(suffix)

  return children
}