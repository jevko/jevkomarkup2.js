import {parseJevko} from "https://cdn.jsdelivr.net/gh/jevko/parsejevko.js@v0.1.6/mod.js"

import {convert} from './mod.js'

const ret = convert(parseJevko(`
[h1][title]
[class[pretty] p][
  list:
]
[ul][
  [style[color: red] li][Foo]
  [li][Bar]
  [li][Baz]
]
[br/]
text node
`))

console.log(JSON.stringify(ret, null, 2))