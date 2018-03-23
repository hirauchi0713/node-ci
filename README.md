# node-ci
これはci機能つきのnode開発用dockerコンテナです。

## 使い方
```
# githubのmasterリポジトリを'check'ステータスで保護する
$ yarn branch-protection ci/branch-protection.js

# プルリクの番号を指定してcheckステータスをsuccessにする
$ yarn pr-check-ok <pr-number>
```

## AUTHOR
平内英之 <hirauchi@ideapump.net>

## LICENSE
MIT
