import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    port: 5174,
    strictPort: false,
    watch: {
      usePolling: true,
    },
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
}

export default config
