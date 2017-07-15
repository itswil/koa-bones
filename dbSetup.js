const path = require('path')
const glob = require('glob')

const { seq } = require('./db')

// generate tables from ./models
glob.sync('./models/*.js').forEach(file => {
  require(path.resolve(file))
  console.log(`*** Requiring ${file}`);
})

seq.sync()
console.log(`****** Database generation complete: ${seq.connectionManager.config.database}`)
