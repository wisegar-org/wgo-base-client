import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
export default defineConfig({
  build: {
    outDir: "dist",
    minify: true,
    rollupOptions: {
      external: ["vue"],
      input: ["index.ts"],
      // output: {
      //   globals: {
      //     vue: "Vue",
      //   },
      //   dir: "dist",
      // },
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: "./dist",
        },
        {
          format: "cjs",
          entryFileNames: "[name].cjs",
          preserveModules: true,
          exports: "named",
          dir: "./dist",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./",
      outputDir: ["./dist"],
      tsConfigFilePath: "./tsconfig.json",
    }),
  ],
});
