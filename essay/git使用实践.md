# git 提交约定

## 目录

## 规范化 commit message

[约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

原文：

```doc
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

译文：

```doc
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

提交说明包含了下面的结构化元素，以向类库使用者表明其意图：

1. **`fix:`** 类型 为 `fix` 的提交表示在代码库中修复了一个 bug（这和语义化版本中的 **`PATCH`** 相对应）。
1. **`feat:`** 类型 为 `feat` 的提交表示在代码库中新增了一个功能（这和语义化版本中的 **`MINOR`** 相对应）。
1. **`BREAKING CHANGE:`** 在脚注中包含 `BREAKING CHANGE`: 或 <类型>(范围) 后面有一个 `!` 的提交，表示引入了破坏性 API 变更（这和语义化版本中的 **`MAJOR`** 相对应）。 破坏性变更可以是任意 类型 提交的一部分。
1. 除 `fix`: 和 `feat`: 之外，也可以使用其它提交 类型 ，例如 **`@commitlint/config-conventional`**（基于 **`Angular 约定`**）中推荐的 `build:`、`chore:`、 `ci:`、`docs:`、`style:`、`refactor:`、`perf:`、`test:`，等等。
1. 脚注中除了 `BREAKING CHANGE: <description>` ，其它条目应该采用类似 **`git trailer format`** 这样的惯例。

其它提交类型在约定式提交规范中并没有强制限制，并且在语义化版本中没有隐式影响（除非它们包含 BREAKING CHANGE）。 可以为提交类型添加一个围在圆括号内的范围，以为其提供额外的上下文信息。例如 `feat(parser): adds ability to parse arrays.`。

---

## 安装 commitizen 插件，自动生成提交规范

全局安装

```shell
# 全局安装
npm install -g commitizen
```

项目安装

```shell
# 项目安装
npm i -D commitizen
```

```shell
# 初始化 git cz 命令，替代git commit
commitizen init cz-conventional-changelog --save-dev --save-exact
```

```ts
// package.json
{
  "scripts": {
    "commit": "git-cz",
    // ...
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
  // ...
}
```

```shell
# 替代 git commit 命令
npm run commit
```

## 自动生成 CHANGELOG

安装依赖

```shell
npm i -D standard-version
```

在 `package.json` 添加脚本命令

```ts
// package.json
{
  "scripts": {
    "release": "standard-version && git push --follow-tags",
    // ...
  },
  // ...
}
```

运行脚本

```shell
# 生成CHANGELOG.md，且自动添加版本号，commit修改
npm run release
```

## 总结

```shell
# 暂存修改文件
git add .

# 提交commit message
npm run commit

# 手动推送(不打版本tag)
git push

# 自动生成CHANGELOG，并打tag，并推送
npm run release
```
