[![npm](https://nodei.co/npm/unist-builder-blueprint-cli.png)](https://npmjs.com/package/unist-builder-blueprint-cli)

# unist-builder-blueprint-cli

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Convert [Unist][] trees to [unist-builder][] notation.

[unist]:  https://github.com/wooorm/unist
[unist-builder]: https://github.com/eush77/unist-builder

[travis]: https://travis-ci.org/eush77/unist-builder-blueprint-cli
[travis-badge]: https://travis-ci.org/eush77/unist-builder-blueprint-cli.svg?branch=master
[david]: https://david-dm.org/eush77/unist-builder-blueprint-cli
[david-badge]: https://david-dm.org/eush77/unist-builder-blueprint-cli.png

## Example

Simple example:

```js
$ unist-builder-blueprint input.json
u('node', { root: true }, [
    u('node', 'foo'),
    u('node', 'bar')
])
```

Set formatting options for [escodegen][]:

```js
$ unist-builder-blueprint --format.indent.style="  " --format.quotes=double input.json
u("node", { root: true }, [
  u("node", "foo"),
  u("node", "bar")
])
```

## CLI

```
Usage:  unist-builder-blueprint [--builder <u>] [escodegen_opts]... [<file>]
```

Convert `<file>` (stdin by default) to [unist-builder][] notation.

Accepts options for [escodegen][]. See [escodegen wiki][] for details.

```
Options:
  --builder <u>  Builder function to use (default: "u")
```

[escodegen]: https://github.com/estools/escodegen
[escodegen wiki]: https://github.com/estools/escodegen/wiki/API

## API

See [unist-builder-blueprint][].

## Related

-   [unist-builder][] — helper for creating Unist trees.
-   [unist-builder-blueprint][] — API for this module.

[unist-builder-blueprint]: https://github.com/eush77/unist-builder-blueprint

## Install

```
npm install unist-builder-blueprint-cli
```

## License

MIT
