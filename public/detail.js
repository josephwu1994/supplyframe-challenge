window.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    document.getElementById('title').style.opacity = 1;
    document.getElementById('description').style.opacity = 1;
    Object.values(document.getElementsByTagName('i')).forEach(el => {
        el.style.opacity = 1
    })
  },500)
  const tags = project.tags[0]
  fetch(`http://api.hackaday.io/v1/users/${project.owner_id}?api_key=${key}`)
  .then(res => res.json())
  .then(user => {
    document.getElementsByTagName('img')[0].setAttribute('src', user.image_url)
    document.getElementById('username').innerHTML = user.username;
  })
})  