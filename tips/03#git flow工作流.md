# gitflow 工作流

[markdown 语法](https://markdown.com.cn/cheat-sheet.html#%E6%80%BB%E8%A7%88)

## 分支介绍

| 分支名称         | 描述                  |
| ---------------- | --------------------- |
| `master`、`main` | 主分支 release        |
| `develop`        | 开发分支 next release |
| `feature/xxx`    | 功能分支              |
| `release/xxx`    | 发布分支              |
| `hotfix/xxx`     | 热修复补丁            |

![github-flow](./images/03-1-GitFlowHotfixBranch.png)

## 分支工作模式

1. ### 从 `master` 创建 `develop` 开发分支

   ```git
   git branch develop
   git push -u origin develop     // 推送远程仓库
   ```

2. ### 从 `develop` 创建 `feature` 功能分支

   ```git
   git checkout develop
   git checkout -b feature_branch
   ```

3. ### 当功能完成后，合并 `feature` 到 `develop`

   ```git
   git checkout develop
   git merge feature_branch

   git branch -D feature_branch
   ```

4. ### 从 `develop` 创建 `release` 发布分支

   ```git
   git checkout develop
   git checkout -b release/0.1.0
   ```

5. ### 当发布分支测试后，合并 `release` 到 `develop` 和 `master`

   ```git
   git checkout master
   git merge release/0.1.0

   git checkout develop
   git merge release/0.1.0

   git branch -D release/0.1.0
   ```

6. ### 当主分支发现 bug，从 `master` 创建 `hotfix` 热修复补丁分支

   ```git
   git checkout master
   git checkout -b hotfix_branch
   ```

7. ### 当 bug 修复后，合并 `hotfix` 到`develop` 和 `master`

   ```git
   git checkout master
   git merge hotfix_branch

   git checkout develop
   git merge hotfix_branch

   git branch -D hotfix_branch
   ```

只有 `master` 和 `develop` 是长期随着项目存在，`feature`、`release`、`hotfix` 分支都是根据开发需要创建，并且完成后即使删除

## 实践场景

1. 开发一个新功能 `feature_A`
2. 突然出现 bug `hotfix_A`
3. 修复完继续开发 `feature_A`
4. 新功能开发完成，发布前测试 `release/0.1.0`

```shell
# 从主分支创建feature分支
git checkout -b feature_A
# ... do something
# 暂存修改
git stash

# 切换主分支
git checkout master
# 从主分支创建hotfix分支
git checkout -b hotfix_A
# ... fix bug
git add .
# 遵循 commit message 规范
git commit -m "fix(scope): 修复xx bug"
# 推送分支
git push

# 切换主分支
git checkout master
git merge hotfix_A
git checkout develop
git merge hotfix_A
git branch -D hotfix_A

# 切换功能分支
git checkout feature_A
# 从暂存区恢复修改
git stash pop
# ... do something
git add .
# 遵循 commit message 规范
git commit -m "feat(scope): 添加A功能"
# 推送分支
git push

git checkout develop
git merge feature_A


git checkout -b release/0.1.0
# ... 测试
git add .
# 遵循 commit message 规范
git commit -m "feat(scope): 添加A功能"
# 推送分支
git push

git checkout master
git merge release/0.1.0
git checkout develop
git merge release/0.1.0
git branch -D release/0.1.0

```
