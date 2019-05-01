const express = require('express')
const path = require('path')
const sassMiddleware = require('node-sass-middleware')
const projectRoutes = require('./routes/projects')

const app = express()

app.set('view engine', 'ejs')

app.use(sassMiddleware({
  src: __dirname+'/sass',
  dest: __dirname+'/public',
  outputStyle: 'expanded',
  prefix: '',
  force: true,
}))

app.use(express.static(path.join(__dirname+ '/public')))

app.get('/', (req, res) => {
  res.redirect('/projects')
})

app.use('/projects', projectRoutes)


app.listen(3000, console.log('listening on PORT 3000'))