const { app } = require('express')

const getStories = (req, res) => {
  res.send({
    message: 'Stories gotten.'
  })
}

module.exports = {
  getStories
}
