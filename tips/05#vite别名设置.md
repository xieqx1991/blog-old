# vite 设置别名

```ts
/* vite.config.ts */

export default defineConfig({
  // ...
  resolve: {
    // ...
    alias: {
      "@": "/src"
    }
  }
});
```

vscode 识别 `@` 需要配置

```json
/* tsconfig.json */

{
  // ...
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
