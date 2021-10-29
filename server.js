const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('HARSHU_OP')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("HERE WE GO")
  })
}

module.exports = keepAlive
