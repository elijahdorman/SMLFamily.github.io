

```javascript{numberLines: true}

var foo = "abc" // highlight-line

// highlight-next-line
console.log("this will be highlighted")

//this will highlight a range

// highlight-start
let bar = "cde"
const blah = bar + foo
// highlight-end

//one-indexed. Highlighs the 1, 3, and 4 (range ends are inclusive)
// highlight-range{2, 4-5}
[
  1,
  2,
  3,
  4,
  5,
]
```

`line-hide`, `hide-next-line`, `hide-start`/`hide-end`, and `hide-range` work just like highlights

//only the first and 4th lines will have a `$`
```shell{outputLines: 2-3, 5}{promptUser: someone}{promptHost: localhost}
ls
foo
bar
echo "blah"
blah
```

language type of `none` prevents syntax highlighting


