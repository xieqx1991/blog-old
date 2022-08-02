# run pnpm in powershell

![powershell](../images/07-1-powershell.png)
![powershell](../images/07-2-run-pnpm-error.png)
![powershell](../images/07-3-Set-ExcutionPolicy.png)
![powershell](../images/07-4-micorsoft-powershel-policy.png)

1. 在 powershell 中执行 pnpm 失败

```shell
set-ExecutionPolicy RemoteSigned

Set-ExecutionPolicy -Scope CurrentUser

Get-ExecutionPolicy -List
```
