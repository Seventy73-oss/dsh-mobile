# DSH Mobile

`dsh-mobile` is an optional DSH Web client plugin that adapts the existing web
interface to phone-sized screens. It keeps the H5 layout rules and navigation
behavior in one installable package, independent of the `ds-bot` plugin.

The plugin adds a narrow-screen Bot drawer, mobile-sized settings and Harness
detail pages, full-width conversation panels, safe-area spacing, and touch
behavior. It only applies below 820 px; desktop layout is left unchanged.

## Install

The package can be installed into a DSH Web profile from a local tarball:

```sh
npm pack ./dsh-mobile
dsh plugin --profile web add ./dsh-mobile-0.1.1.tgz
```

Restart DSH Web after enabling the plugin. To remove the adaptation, disable
and remove `dsh-mobile` in the DSH plugin manager.

## Development

The source CSS and client behavior are in `src/`. `client.js` is generated:

```sh
cd dsh-mobile
npm ci
npm run build
npm run check
```

The plugin uses DSH's client module loader and does not modify DSH files or
depend on the FnOS Nginx configuration.
