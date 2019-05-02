const router = require('express').Router()
const fetch = require('node-fetch')
require('dotenv').config()

router.get('/', (req, res) => {
  const page = req.query.page === undefined ? 1 : req.query.page
  fetch(`https://api.hackaday.io/v1/projects?api_key=${process.env.API_KEY}&per_page=15&page=${page}`)
    .then(res => res.json())
    .then(projects => {
      res.render('index', { 
        projects: projects.projects, 
        pagination: { 
          page: projects.page,
        } })
    })
    .catch(err => console.error(err))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  fetch(`http://api.hackaday.io/v1/projects/${id}?api_key=${process.env.API_KEY}`)
  .then(res => res.json()) 
  .then(project => {
    res.render('detail', {
      project
    })
  })
})

module.exports = router