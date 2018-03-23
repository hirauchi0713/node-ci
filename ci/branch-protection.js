//
// masterブランチに直にpushできないようにする
//

const ci = require('./ci.js')
const fs = require('fs')

const Client = require('node-rest-client').Client
const client = new Client()

const api = 'https://api.github.com/repos/${OWNER}/${REPO}/branches/${BRANCH}/protection'

if (process.argv.length < 3) {
  console.log('usage: yarn branch-protection json [branch]')
  return 1
}

fs.readFile(process.argv[2], (err, str) => {
  var postArgs = ci.makePostArgs(
    {
      path: {BRANCH: process.argv[3] || 'master'}
    },
    JSON.parse(str))
  client.put(api, postArgs, (data, res) => {
    ci.responseLog(res)
  })
})


