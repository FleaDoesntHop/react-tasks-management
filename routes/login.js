module.exports = app => {
  app.get('/user/sign-up', (req, res) => {
    console.log(req.body)
  })
}