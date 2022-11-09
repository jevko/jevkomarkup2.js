NOTE: this is a sketch

# jevkomarkup2.js

Codename Jevko Markup 2.

A Jevko format for markup that decodes this:

```
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
```

into this:

```json
[
  "\n",
  {
    "tag": "h1",
    "attributes": {},
    "children": [
      "title"
    ]
  },
  "\n",
  {
    "tag": "p",
    "attributes": {
      "class": "pretty"
    },
    "children": [
      "\n  list:\n"
    ]
  },
  "\n",
  {
    "tag": "ul",
    "attributes": {},
    "children": [
      "\n  ",
      {
        "tag": "li",
        "attributes": {
          "style": "color: red"
        },
        "children": [
          "Foo"
        ]
      },
      "\n  ",
      {
        "tag": "li",
        "attributes": {},
        "children": [
          "Bar"
        ]
      },
      "\n  ",
      {
        "tag": "li",
        "attributes": {},
        "children": [
          "Baz"
        ]
      },
      "\n"
    ]
  },
  "\n",
  {
    "tag": "br/",
    "attributes": {},
    "children": []
  },
  "\ntext node\n"
]
```

