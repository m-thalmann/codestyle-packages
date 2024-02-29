const esbuild = require('esbuild');
esbuild
  .build({
    entryPoints: ['./index.js'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    packages: 'external',
    format: 'cjs',
  })
  .catch(() => process.exit(1));
