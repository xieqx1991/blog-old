<!--
 * @Description:
 * @Author: xieqx
 * @Date: 2022-03-04 15:02:09
 * @LastEditors: xieqx
 * @LastEditTime: 2022-03-04 15:22:51
-->

# 生成目录结构树

```shell
# 全局添加
npm install -g tree-node-cli
```

```shell
$ tree -h

  Usage: tree [options]

  Options:

    -V, --version             # 打印版本号
    -a, --all-files           # 显示所有文件，包括隐藏文件
    --dirs-first              # 文件夹排在文件之前
    -d, --dirs-only           # 只显示文件夹
    -s, --sizes               # 显示文件大小
    -I, --exclude [patterns]  # 除了文件夹 使用"|"分隔，需要使用双引号匹配 "xxx". E.g. "node_modules|coverage".
    -L, --max-depth <n>       # 最大显示深度
    -r, --reverse             # 首字母逆序排列，默认正序
    -F, --trailing-slash      # 文件夹后添加"/"
    -S, --line-ascii          # 使用 ASCII 显示线图形
    -h, --help                # 打印使用方法
```

window 下 `tree` 命令被占用，使用 **`treee`** 命令

```shell
# 输出到 tree.md
treee --dirs-first -F -L 2 -I "node_modules" > tree.md
```
