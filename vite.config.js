import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Spidey-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: `${import.meta.dirname}/index.html`,
        projects: `${import.meta.dirname}/projects/index.html`,
        works: `${import.meta.dirname}/works/index.html`,
        resume: `${import.meta.dirname}/resume/index.html`,
        about: `${import.meta.dirname}/about/index.html`,
        contact: `${import.meta.dirname}/contact/index.html`,
      },
    },
  },
})
