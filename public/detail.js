window.addEventListener('DOMContentLoaded', (e) => {
  //fetch owner of the project to get username and profile picture
  fetch(`http://api.hackaday.io/v1/users/${project.owner_id}?api_key=${key}`)
  .then(res => res.json())
  .then(user => {
    document.getElementById('profilepic').setAttribute('src', user.image_url)
    document.getElementById('username').innerHTML = user.username
  })
  setTimeout(() => {
    document.getElementById('title').style.opacity = 1
    document.getElementById('description').style.opacity = 1
    Object.values(document.getElementsByTagName('i')).forEach(el => {
        el.style.opacity = 1
    })
    document.getElementById('username').style.opacity = 1
    document.getElementById('profilepic').style.opacity = 1
    document.getElementById('recommendation').style.opacity = 1
  },500)
  const tag = project.tags[0]
  
  //fetch 5 recommended users from the first tag
  fetch(`http://api.hackaday.io/v1/search/users?api_key=${key}&search_term=${tag}&per_page=5`)
  .then(res => res.json())
  .then(result => {
    console.log(result)
    const users = result.users
    if(users.length === 0) {
      const node = document.createElement('h1')
      node.innerHTML = 'No Recommended Users'
      document.getElementById('user-suggestion').appendChild(node)
    } else {
      users.forEach(user => {
        const div = document.createElement('div')
        div.setAttribute('class','suggested-user')
        const img = document.createElement('img')
        img.setAttribute('src', user.image_url)
        const userName = document.createElement('h4')
        userName.innerHTML = truncateText(user.username)
        div.appendChild(img)
        div.appendChild(userName)
        document.getElementById('user-suggestion').appendChild(div)
      })
    }
  })
  // fetch 5 recommended projects from the first tag
  fetch(`http://api.hackaday.io/v1/search/projects?api_key=${key}&search_term=${tag}&per_page=5`)
  .then(res => res.json())
  .then(result => {
    const projects = result.projects
    if(projects.length === 0) {
      const node = document.createElement('h1')
      node.innerHTML = 'No Recommended Projects'
      document.getElementById('project-suggestion').appendChild(node)
    } else {
      projects.forEach(project => {
        const div = document.createElement('div')
        div.setAttribute('class','suggested-project')
        const img = document.createElement('img')
        img.setAttribute('src', project.image_url)
        const projectName = document.createElement('h4')
        projectName.innerHTML = truncateText(project.name)
        div.appendChild(img)
        div.appendChild(projectName)
        document.getElementById('project-suggestion').appendChild(div)
      })
    }
  })
})  

const truncateText = (text) => {
  const max = 20;
  if(text === null) return 'no username';
  if(text.length > max) {
    return text.substr(0,max)+'...'
  } else {
    return text
  }
}