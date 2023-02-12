const { app } = require('express')

const getComments = (req, res) => {
  res.send({
    message: 'Comments gotten.'
  })
}

module.exports = {
  getComments
}
