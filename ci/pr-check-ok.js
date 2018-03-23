//
// 指定されたプルリクにcheck okを出す
//

const ci = require('./ci.js')

const Client = require('node-rest-client').Client
const client = new Client()

const list_commits = 'https://api.github.com/repos/${OWNER}/${REPO}/pulls/${NUMBER}/commits'
const statuses = 'https://api.github.com/repos/${OWNER}/${REPO}/statuses/'

const getArgs = ci.makeGetArgs({
  path: {
    NUMBER: process.argv[2]
  }
})

const postArgs = ci.makePostArgs({}, {
  "state": "success",
  "context": "check"
})

client.get(list_commits, getArgs, (json, res) => {
  ci.responseLog(res)
  json.forEach(commits => {
    const url = statuses+commits.sha
    client.post(url, postArgs, (data, res) => {
      ci.responseLog(res)
    })
  })
})
