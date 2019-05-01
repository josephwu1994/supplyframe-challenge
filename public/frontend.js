window.addEventListener('DOMContentLoaded', (e) => {
  let ownerIds = ''
  console.log(key)
  projects.forEach((project, index) => {
    if( index === 0 ) ownerIds += project.owner_id
    else ownerIds += `,${project.owner_id}`
  })
  fetch(`http://api.hackaday.io/v1/users/batch?ids=${ownerIds}&api_key=${key}`)
  .then(res => res.json())
  .then(owners => {
    owners.users.forEach(owner => {
      Object.values(document.getElementsByClassName(`${owner.id}`)).forEach(el => {
        el.innerHTML = owner.username
      })
      Object.values(document.getElementsByClassName(`${owner.id}image`)).forEach(el => {
        el.style.backgroundImage = `url(${owner.image_url})`
      })
      Object.values(document.getElementsByClassName(`${owner.id}bio`)).forEach(el => {
        el.innerHTML = `
          <h4>${owner.username}</h4>
          <p>${owner.who_am_i}</p>
        `
      })
      Object.values(document.getElementsByClassName(`${owner.id}stats`)).forEach(el => {
        el.innerHTML=`
          <div>${owner.followers} Followers</div>
          <div>${owner.projects} Projects</div>
        `
      })
    })
  })
 
  Object.values(document.getElementsByClassName('owner')).forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      document.getElementById(`${e.target.id}tooltip`).style.opacity = 1;
    })
  })
  Object.values(document.getElementsByClassName('owner')).forEach(el => {
    el.addEventListener('mouseleave', (e) => {
      document.getElementById(`${e.target.id}tooltip`).style.opacity = 0;
    })
  })
})  