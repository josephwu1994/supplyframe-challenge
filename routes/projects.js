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
  // fetch(`http://api.hackaday.io/v1/projects/${id}?api_key=${process.env.API_KEY}`)
  // .then(res => res.json()) 
  // .then(project => {
  //   res.render('projects/detail', {
  //     project
  //   })
  // })
  res.render('detail', {
    project: { id: 5373,
      url: 'https://hackaday.io/project/5373-hack-chat',
      owner_id: 182178,
      name: 'Hack Chat',
      summary:
       'Use the team chat to talk about your projects and find collaborators for whatever you are working on.',
      description:
       'If you need help on your project you&apos;ve come to the right place. \r\nClick on the &quot;Public Chat&quot; button on the left top and you&apos;re automatically in. \r\n\r\nThose that just want to talk about hacking have found the place as well. All are welcome!',
      image_url: 'https://cdn.hackaday.io/images/7255311484679597966.png',
      views: 53591,
      comments: 193,
      followers: 2519,
      skulls: 1359,
      logs: 0,
      details: 1,
      instruction: 1,
      components: 0,
      images: 3,
      created: 1429655720,
      updated: 1556126879,
      tags: [ 'ongoing project' ] 
    }
  })
})

module.exports = router