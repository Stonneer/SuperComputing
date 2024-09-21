// vite.config.js
import { resolve } from "path";
import vue from "file:///R:/440Develop/smart-admin-master/smart-admin-master/smart-admin-web/javascript-ant-design-vue3/node_modules/@vitejs/plugin-vue/dist/index.mjs";

// src/theme/custom-variables.js
import { theme } from "file:///R:/440Develop/smart-admin-master/smart-admin-master/smart-admin-web/javascript-ant-design-vue3/node_modules/ant-design-vue/lib/index.js";
import convertLegacyToken from "file:///R:/440Develop/smart-admin-master/smart-admin-master/smart-admin-web/javascript-ant-design-vue3/node_modules/ant-design-vue/lib/theme/convertLegacyToken.js";
var { defaultAlgorithm, defaultSeed } = theme;
var mapToken = defaultAlgorithm(defaultSeed);
var token = convertLegacyToken.default(mapToken);
var custom_variables_default = {
  "@primary-color": token["primary-color"],
  // 全局主色
  "@base-bg-color": "#fff",
  "@hover-bg-color": "rgba(0, 0, 0, 0.025)",
  "@hover-bg-color-night": "rgba(255, 255, 255, 0.025)",
  "@header-light-bg-hover-color": "#f6f6f6",
  "@header-height": "80px",
  "@header-user-height": "40px",
  "@page-tag-height": "40px",
  "@theme-list": ["light", "dark", "night"]
};

// vite.config.js
var __vite_injected_original_dirname = "R:\\440Develop\\smart-admin-master\\smart-admin-master\\smart-admin-web\\javascript-ant-design-vue3";
var pathResolve = (dir) => {
  return resolve(__vite_injected_original_dirname, ".", dir);
};
var vite_config_default = {
  base: process.env.NODE_ENV === "production" ? "/" : "/",
  root: process.cwd(),
  resolve: {
    alias: [
      // 国际化替换
      {
        find: "vue-i18n",
        replacement: "vue-i18n/dist/vue-i18n.cjs.js"
      },
      // 绝对路径重命名：/@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve("src") + "/"
      },
      {
        find: /^~/,
        replacement: ""
      }
    ]
  },
  // 服务端渲染
  server: {
    host: "0.0.0.0",
    port: 8081
  },
  plugins: [vue()],
  optimizeDeps: {
    include: ["ant-design-vue/es/locale/zh_CN", "dayjs/locale/zh-cn", "ant-design-vue/es/locale/en_US"],
    exclude: ["vue-demi"]
  },
  build: {
    // 清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        //配置这个是让不同类型文件放在不同文件夹，不会显得太乱
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      }
    },
    target: "modules",
    outDir: "dist",
    // 指定输出路径
    assetsDir: "assets",
    // 指定生成静态文件目录
    assetsInlineLimit: "4096",
    // 小于此阈值的导入或引用资源将内联为 base64 编码
    chunkSizeWarningLimit: 500,
    // chunk 大小警告的限制
    minify: "terser",
    // 混淆器，terser构建后文件体积更小
    emptyOutDir: true
    //打包前先清空原有打包文件
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: custom_variables_default,
        javascriptEnabled: true
      }
    }
  },
  define: {
    __INTLIFY_PROD_DEVTOOLS__: false,
    "process.env": process.env
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL3RoZW1lL2N1c3RvbS12YXJpYWJsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJSOlxcXFw0NDBEZXZlbG9wXFxcXHNtYXJ0LWFkbWluLW1hc3RlclxcXFxzbWFydC1hZG1pbi1tYXN0ZXJcXFxcc21hcnQtYWRtaW4td2ViXFxcXGphdmFzY3JpcHQtYW50LWRlc2lnbi12dWUzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJSOlxcXFw0NDBEZXZlbG9wXFxcXHNtYXJ0LWFkbWluLW1hc3RlclxcXFxzbWFydC1hZG1pbi1tYXN0ZXJcXFxcc21hcnQtYWRtaW4td2ViXFxcXGphdmFzY3JpcHQtYW50LWRlc2lnbi12dWUzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9SOi80NDBEZXZlbG9wL3NtYXJ0LWFkbWluLW1hc3Rlci9zbWFydC1hZG1pbi1tYXN0ZXIvc21hcnQtYWRtaW4td2ViL2phdmFzY3JpcHQtYW50LWRlc2lnbi12dWUzL3ZpdGUuY29uZmlnLmpzXCI7LypcbiAqIHZpdGVcdTkxNERcdTdGNkVcbiAqXG4gKiBAQXV0aG9yOiAgICAxMDI0XHU1MjFCXHU2NUIwXHU1QjlFXHU5QThDXHU1QkE0LVx1NEUzQlx1NEVGQlx1RkYxQVx1NTM1M1x1NTkyN1xuICogQERhdGU6ICAgICAgMjAyMi0wNS0wMiAyMzo0NDo1NlxuICogQFdlY2hhdDogICAgemh1ZGExMDI0XG4gKiBARW1haWw6ICAgICBsYWIxMDI0QDE2My5jb21cbiAqIEBDb3B5cmlnaHQgIDEwMjRcdTUyMUJcdTY1QjBcdTVCOUVcdTlBOENcdTVCQTQgXHVGRjA4IGh0dHBzOi8vMTAyNGxhYi5uZXQgXHVGRjA5XHVGRjBDU2luY2UgMjAxMlxuICovXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgY3VzdG9tVmFyaWFibGVzIGZyb20gJy9AL3RoZW1lL2N1c3RvbS12YXJpYWJsZXMuanMnO1xuXG5jb25zdCBwYXRoUmVzb2x2ZSA9IChkaXIpID0+IHtcbiAgcmV0dXJuIHJlc29sdmUoX19kaXJuYW1lLCAnLicsIGRpcik7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICBiYXNlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJy8nIDogJy8nLFxuICByb290OiBwcm9jZXNzLmN3ZCgpLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIC8vIFx1NTZGRFx1OTY0NVx1NTMxNlx1NjZGRlx1NjM2MlxuICAgICAge1xuICAgICAgICBmaW5kOiAndnVlLWkxOG4nLFxuICAgICAgICByZXBsYWNlbWVudDogJ3Z1ZS1pMThuL2Rpc3QvdnVlLWkxOG4uY2pzLmpzJyxcbiAgICAgIH0sXG4gICAgICAvLyBcdTdFRERcdTVCRjlcdThERUZcdTVGODRcdTkxQ0RcdTU0N0RcdTU0MERcdUZGMUEvQC94eHh4ID0+IHNyYy94eHh4XG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9cXC9AXFwvLyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGhSZXNvbHZlKCdzcmMnKSArICcvJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6IC9efi8sXG4gICAgICAgIHJlcGxhY2VtZW50OiAnJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgLy8gXHU2NzBEXHU1MkExXHU3QUVGXHU2RTMyXHU2N0QzXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICBwb3J0OiA4MDgxLFxuICB9LFxuICBwbHVnaW5zOiBbdnVlKCldLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ2FudC1kZXNpZ24tdnVlL2VzL2xvY2FsZS96aF9DTicsICdkYXlqcy9sb2NhbGUvemgtY24nLCAnYW50LWRlc2lnbi12dWUvZXMvbG9jYWxlL2VuX1VTJ10sXG4gICAgZXhjbHVkZTogWyd2dWUtZGVtaSddLFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIFx1NkUwNVx1OTY2NGNvbnNvbGVcdTU0OENkZWJ1Z2dlclxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy9cdTkxNERcdTdGNkVcdThGRDlcdTRFMkFcdTY2MkZcdThCQTlcdTRFMERcdTU0MENcdTdDN0JcdTU3OEJcdTY1ODdcdTRFRjZcdTY1M0VcdTU3MjhcdTRFMERcdTU0MENcdTY1ODdcdTRFRjZcdTU5MzlcdUZGMENcdTRFMERcdTRGMUFcdTY2M0VcdTVGOTdcdTU5MkFcdTRFNzFcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdqcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdqcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdbZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgLy9cdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUyMDZcdTYyQzZcdTYyNTNcdTUzMDVcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQudG9TdHJpbmcoKS5zcGxpdCgnbm9kZV9tb2R1bGVzLycpWzFdLnNwbGl0KCcvJylbMF0udG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGFyZ2V0OiAnbW9kdWxlcycsXG4gICAgb3V0RGlyOiAnZGlzdCcsIC8vIFx1NjMwN1x1NUI5QVx1OEY5M1x1NTFGQVx1OERFRlx1NUY4NFxuICAgIGFzc2V0c0RpcjogJ2Fzc2V0cycsIC8vIFx1NjMwN1x1NUI5QVx1NzUxRlx1NjIxMFx1OTc1OVx1NjAwMVx1NjU4N1x1NEVGNlx1NzZFRVx1NUY1NVxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAnNDA5NicsIC8vIFx1NUMwRlx1NEU4RVx1NkI2NFx1OTYwOFx1NTAzQ1x1NzY4NFx1NUJGQ1x1NTE2NVx1NjIxNlx1NUYxNVx1NzUyOFx1OEQ0NFx1NkU5MFx1NUMwNlx1NTE4NVx1ODA1NFx1NEUzQSBiYXNlNjQgXHU3RjE2XHU3ODAxXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA1MDAsIC8vIGNodW5rIFx1NTkyN1x1NUMwRlx1OEI2Nlx1NTQ0QVx1NzY4NFx1OTY1MFx1NTIzNlxuICAgIG1pbmlmeTogJ3RlcnNlcicsIC8vIFx1NkRGN1x1NkRDNlx1NTY2OFx1RkYwQ3RlcnNlclx1Njc4NFx1NUVGQVx1NTQwRVx1NjU4N1x1NEVGNlx1NEY1M1x1NzlFRlx1NjZGNFx1NUMwRlxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLCAvL1x1NjI1M1x1NTMwNVx1NTI0RFx1NTE0OFx1NkUwNVx1N0E3QVx1NTM5Rlx1NjcwOVx1NjI1M1x1NTMwNVx1NjU4N1x1NEVGNlxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIG1vZGlmeVZhcnM6IGN1c3RvbVZhcmlhYmxlcyxcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgIF9fSU5UTElGWV9QUk9EX0RFVlRPT0xTX186IGZhbHNlLFxuICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52LFxuICB9LFxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiUjpcXFxcNDQwRGV2ZWxvcFxcXFxzbWFydC1hZG1pbi1tYXN0ZXJcXFxcc21hcnQtYWRtaW4tbWFzdGVyXFxcXHNtYXJ0LWFkbWluLXdlYlxcXFxqYXZhc2NyaXB0LWFudC1kZXNpZ24tdnVlM1xcXFxzcmNcXFxcdGhlbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIlI6XFxcXDQ0MERldmVsb3BcXFxcc21hcnQtYWRtaW4tbWFzdGVyXFxcXHNtYXJ0LWFkbWluLW1hc3RlclxcXFxzbWFydC1hZG1pbi13ZWJcXFxcamF2YXNjcmlwdC1hbnQtZGVzaWduLXZ1ZTNcXFxcc3JjXFxcXHRoZW1lXFxcXGN1c3RvbS12YXJpYWJsZXMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1I6LzQ0MERldmVsb3Avc21hcnQtYWRtaW4tbWFzdGVyL3NtYXJ0LWFkbWluLW1hc3Rlci9zbWFydC1hZG1pbi13ZWIvamF2YXNjcmlwdC1hbnQtZGVzaWduLXZ1ZTMvc3JjL3RoZW1lL2N1c3RvbS12YXJpYWJsZXMuanNcIjtpbXBvcnQgeyB0aGVtZSB9IGZyb20gJ2FudC1kZXNpZ24tdnVlL2xpYic7XG5pbXBvcnQgY29udmVydExlZ2FjeVRva2VuIGZyb20gJ2FudC1kZXNpZ24tdnVlL2xpYi90aGVtZS9jb252ZXJ0TGVnYWN5VG9rZW4nO1xuXG5jb25zdCB7IGRlZmF1bHRBbGdvcml0aG0sIGRlZmF1bHRTZWVkIH0gPSB0aGVtZTtcblxuY29uc3QgbWFwVG9rZW4gPSBkZWZhdWx0QWxnb3JpdGhtKGRlZmF1bHRTZWVkKTtcbmNvbnN0IHRva2VuID0gY29udmVydExlZ2FjeVRva2VuLmRlZmF1bHQobWFwVG9rZW4pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICdAcHJpbWFyeS1jb2xvcic6IHRva2VuWydwcmltYXJ5LWNvbG9yJ10sIC8vIFx1NTE2OFx1NUM0MFx1NEUzQlx1ODI3MlxuICAnQGJhc2UtYmctY29sb3InOiAnI2ZmZicsXG4gICdAaG92ZXItYmctY29sb3InOiAncmdiYSgwLCAwLCAwLCAwLjAyNSknLFxuICAnQGhvdmVyLWJnLWNvbG9yLW5pZ2h0JzogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpJyxcbiAgJ0BoZWFkZXItbGlnaHQtYmctaG92ZXItY29sb3InOiAnI2Y2ZjZmNicsXG4gICdAaGVhZGVyLWhlaWdodCc6ICc4MHB4JyxcbiAgJ0BoZWFkZXItdXNlci1oZWlnaHQnOiAnNDBweCcsXG4gICdAcGFnZS10YWctaGVpZ2h0JzogJzQwcHgnLFxuICAnQHRoZW1lLWxpc3QnOiBbJ2xpZ2h0JywgJ2RhcmsnLCAnbmlnaHQnXSxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBU0EsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUzs7O0FDVm9mLFNBQVMsYUFBYTtBQUMxaEIsT0FBTyx3QkFBd0I7QUFFL0IsSUFBTSxFQUFFLGtCQUFrQixZQUFZLElBQUk7QUFFMUMsSUFBTSxXQUFXLGlCQUFpQixXQUFXO0FBQzdDLElBQU0sUUFBUSxtQkFBbUIsUUFBUSxRQUFRO0FBRWpELElBQU8sMkJBQVE7QUFBQSxFQUNiLGtCQUFrQixNQUFNLGVBQWU7QUFBQTtBQUFBLEVBQ3ZDLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLHlCQUF5QjtBQUFBLEVBQ3pCLGdDQUFnQztBQUFBLEVBQ2hDLGtCQUFrQjtBQUFBLEVBQ2xCLHVCQUF1QjtBQUFBLEVBQ3ZCLG9CQUFvQjtBQUFBLEVBQ3BCLGVBQWUsQ0FBQyxTQUFTLFFBQVEsT0FBTztBQUMxQzs7O0FEbEJBLElBQU0sbUNBQW1DO0FBYXpDLElBQU0sY0FBYyxDQUFDLFFBQVE7QUFDM0IsU0FBTyxRQUFRLGtDQUFXLEtBQUssR0FBRztBQUNwQztBQUNBLElBQU8sc0JBQVE7QUFBQSxFQUNiLE1BQU0sUUFBUSxJQUFJLGFBQWEsZUFBZSxNQUFNO0FBQUEsRUFDcEQsTUFBTSxRQUFRLElBQUk7QUFBQSxFQUNsQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsTUFDZjtBQUFBO0FBQUEsTUFFQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxZQUFZLEtBQUssSUFBSTtBQUFBLE1BQ3BDO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ2YsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGtDQUFrQyxzQkFBc0IsZ0NBQWdDO0FBQUEsSUFDbEcsU0FBUyxDQUFDLFVBQVU7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTCxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUE7QUFBQSxRQUVOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGFBQWEsSUFBSTtBQUVmLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixtQkFBTyxHQUFHLFNBQVMsRUFBRSxNQUFNLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQVM7QUFBQSxVQUN4RTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBO0FBQUEsSUFDUixXQUFXO0FBQUE7QUFBQSxJQUNYLG1CQUFtQjtBQUFBO0FBQUEsSUFDbkIsdUJBQXVCO0FBQUE7QUFBQSxJQUN2QixRQUFRO0FBQUE7QUFBQSxJQUNSLGFBQWE7QUFBQTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLFlBQVk7QUFBQSxRQUNaLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLDJCQUEyQjtBQUFBLElBQzNCLGVBQWUsUUFBUTtBQUFBLEVBQ3pCO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
