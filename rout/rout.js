const {Router} = require('express')

const router = Router()

redirect('/')
router.get('/', async (req, res) => {
  req.body.firstName
  //res.redirect('/')
})
