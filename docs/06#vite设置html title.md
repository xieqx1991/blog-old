# vite 设置 html title

## 添加插件

[`npm i -D vite-plugin-html`](https://github.com/vbenjs/vite-plugin-html/tree/main#readme)

## 配置变量

```ts
/* vite.config.ts */

import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

// 获取环境变量函数，读取.env[mode]
const getEnvFn = (mode, target) => {
  return loadEnv(mode, process.cwd())[target];
};

export default ({ mode }) =>
  defineConfig({
    // ...
    plugins: [
      // ...
      createHtmlPlugin({
        minify: true,
        inject: {
          // 需要注入的信息
          data: {
            title: getEnvFn(mode, "VITE_APP_TITLE")
          }
        }
      })
    ]
  });
```

## 引用

```html
<!-- index.html -->

<!DOCTYPE html>
<html>
  <head>
    <!-- ... -->
    <title><%- title %></title>
  </head>
</html>
```
