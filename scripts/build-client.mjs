import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'esbuild'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const OUTPUT = join(ROOT, 'client.js')

export async function bundleClient() {
  const result = await build({
    absWorkingDir: ROOT,
    entryPoints: ['src/client.js'],
    bundle: true,
    format: 'cjs',
    platform: 'browser',
    target: 'es2022',
    loader: { '.css': 'text' },
    charset: 'utf8',
    write: false,
    logLevel: 'silent',
  })
  if (result.warnings.length) throw new Error(result.warnings.map(item => item.text).join('\n'))
  return [
    '// Generated from src/client.js by `npm run build`. Do not edit by hand.',
    'window.__ModuleLoader__.load({',
    "  id: 'dsh-mobile',",
    '  factory: (require) => {',
    'const module = { exports: {} }',
    result.outputFiles[0].text.trimEnd(),
    "return Object.defineProperty({ ...module.exports }, Symbol.toStringTag, { value: 'Module' })",
    '  },',
    '})',
    '',
  ].join('\n')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const next = await bundleClient()
  if (process.argv.includes('--check')) {
    let current = null
    try { current = readFileSync(OUTPUT, 'utf8') } catch { /* missing counts as stale */ }
    if (current !== next) {
      console.error('client.js is stale: run `npm run build` in dsh-mobile')
      process.exit(1)
    }
  } else {
    writeFileSync(OUTPUT, next)
  }
}
