import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['lib/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  external: ['bun', 'bun:ffi', 'bun:jsc', 'bun:sqlite'],
  dts: true,
  onSuccess: "bun run build:rust"
});