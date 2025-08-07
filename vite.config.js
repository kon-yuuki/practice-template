import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['**/*.glsl', '**/*.vert', '**/*.frag'],
  server: {
    host: true,
  }
})