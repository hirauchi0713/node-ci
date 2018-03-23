# node-ci
これはci機能つきのnode開発用dockerコンテナです。

## AUTHOR
平内英之 <hirauchi@ideapump.net>

## LICENSE
MIT

# インストール
次の内容をdocker-compose.ymlに付け足してください
```
version: "2"
services:
  node-ci:
    image: hirauchi/node-ci
    volumes:
      - ".env:/.env"
```

## .env
リポジトリオーナーは.envに以下の変数を環境に合わせて設定してください。
```
REPO=sqlpp
OWNER=hirauchi0713
GIT_TOKEN=xxxx
```

## 使い方
```
# githubのmasterリポジトリを'check'ステータスで保護する
$ docker-compose run node-ci branch-protection ci/branch-protection.js

# プルリクの番号を指定してcheckステータスをsuccessにする
$ docker-compose run node-ci pr-check-ok <pr-number>
```
