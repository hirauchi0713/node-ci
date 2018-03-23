require('dotenv').config()

const OWNER  = process.env.OWNER
const REPO   = process.env.REPO
const TOKEN  = process.env.GIT_SQLPP_TOKEN

function makeHeaders(_head) {
  var head = _head || {}
  head["User-Agent"]    = head["User-Agent"]    || "node-rest-client"
  head["Authorization"] = head["Authorization"] || `token ${TOKEN}`
  return head
}

function makePath(_path) {
  var path = _path || {}
  path.OWNER = path.OWNER || OWNER
  path.REPO  = path.REPO  || REPO
  path.TOKEN = path.TOKEN || TOKEN
  return path
}

exports.makeGetArgs = (_seed) => {
  var seed = _seed || {}
  seed.headers = makeHeaders(seed.headers)
  seed.path    = makePath(seed.path)
  return seed
}

exports.makePostArgs = (_seed, json) => {
  var seed = _seed || {}
  seed.headers = makeHeaders(seed.headers)
  seed.path    = makePath(seed.path)
  seed.data    = seed.data || {}

  Object.assign(seed.data, json);
  seed.headers['Content-Type'] = seed.headers['Content-Type'] || 'application/json'
  return seed
}

exports.responseLog = (res) => {
  console.log(`${res.responseUrl} => ${res.statusCode}: ${res.statusMessage}`)
}
