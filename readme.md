# unist-builder-blueprint-cli

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

CLI to transform [**unist**][unist] [*trees*][tree] to [`unist-builder`][u]
notation.

## Install

[npm][]:

```sh
npm install -g unist-builder-blueprint-cli
```

## Use

Stdin:

```sh
$ unist-builder-blueprint  <<< '{"type":"text","value":"alpha"}'
u('text', 'alpha')
```

File:

```sh
$ cat input.json
{
  "type": "node",
  "root": true,
  "children": [
    {"type": "literal", "value": 1},
    {"type": "literal", "value": "bravo"}
  ]
}
$ unist-builder-blueprint input.json
u('node', { root: true }, [
    u('literal', 1),
    u('literal', 'bravo')
])
```

Formatting options for [`escodegen`][escodegen]:

```js
$ unist-builder-blueprint --format.indent.style="  " --format.quotes=double input.json
u("node", { root: true }, [
  u("literal", 1),
  u("literal", "bravo")
])
```

## CLI

```txt
Usage: unist-builder-blueprint [--builder <u>] [escodegen_opts]... [<file>]

  Convert <file> (stdin by default) to unist-builder notation.

  Accepts options for escodegen. See escodegen wiki for details.

Options:
  --builder <u>  Builder function to use (default: "u")
```

## Related

*   [`unist-builder`][u]
    — Create [unist][] trees
*   [`unist-builder-blueprint`](https://github.com/syntax-tree/unist-builder-blueprint)
    — API for this module
*   [`hastscript`](https://github.com/syntax-tree/hastscript)
    — Create [hast][] trees
*   [`xastscript`](https://github.com/syntax-tree/xastscript)
    — Create [xast][] trees

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://img.shields.io/travis/syntax-tree/unist-builder-blueprint-cli.svg

[build]: https://travis-ci.org/syntax-tree/unist-builder-blueprint-cli

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-builder-blueprint-cli.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-builder-blueprint-cli

[downloads-badge]: https://img.shields.io/npm/dm/unist-builder-blueprint-cli.svg

[downloads]: https://www.npmjs.com/package/unist-builder-blueprint-cli

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[tree]: https://github.com/syntax-tree/unist#tree

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[u]: https://github.com/syntax-tree/unist-builder

[escodegen]: https://github.com/estools/escodegen
