[![npm](https://nodei.co/npm/unist-builder-blueprint-cli.png)](https://npmjs.com/package/unist-builder-blueprint-cli)

# unist-builder-blueprint-cli

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Convert [Unist] trees to [unist-builder] notation.

[unist]:  https://github.com/wooorm/unist
[unist-builder]: https://github.com/eush77/unist-builder

[travis]: https://travis-ci.org/eush77/unist-builder-blueprint-cli
[travis-badge]: https://travis-ci.org/eush77/unist-builder-blueprint-cli.svg?branch=master
[david]: https://david-dm.org/eush77/unist-builder-blueprint-cli
[david-badge]: https://david-dm.org/eush77/unist-builder-blueprint-cli.png

## CLI

```
Usage:  unist-builder-blueprint [--builder <u>] [format_opts]... [<file>]
```

Convert `<file>` (stdin by default) to [unist-builder] notation.

```
Options:
  --builder  Builder function to use (default: `u`)
```

## API

See [unist-builder-blueprint].

[unist-builder-blueprint]: https://github.com/eush77/unist-builder-blueprint

## Install

```
npm install unist-builder-blueprint-cli
```

## License

MIT
