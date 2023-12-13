let projectsData = {
  data : [
    {
      projectName: 'adarsh portfolio',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'notes website',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'countdown',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'calculator',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'dictionary',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'random joke generator',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'image search api',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'guess the number game',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'tic tac toe',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'to do list',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'weather api',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
  ]
}

// Creating all the projects...
const projectContainer = document.querySelector('.projects__container')
for (let i of projectsData.data) {
  let project = document.createElement('div');
  project.classList.add('project');
  let projectLink = document.createElement('a');
  projectLink.setAttribute('href', i.link);
  projectLink.setAttribute('target', '_blank')
  projectLink.innerHTML = i.projectName;
  project.appendChild(projectLink);
  projectContainer.appendChild(project);
}


// Get the input value from the inputbar...
const inputSearchValue = document.querySelector('.searchbar')
const searchBtn = document.querySelector('.search__btn')
const linkOfProjects = document.querySelectorAll('.project a')
const eachProject = document.querySelectorAll('.project')
inputSearchValue.addEventListener('input', function(){
  let inputValue = inputSearchValue.value
  linkOfProjects.forEach(function(element, index){
    if(element.innerText.includes(inputValue.toUpperCase())){
      eachProject[index].classList.remove('hide')
    }else{
      eachProject[index].classList.add('hide')
    }
  })
})
searchBtn.addEventListener('click', function(){
  const visibleProjects = document.querySelectorAll('.project:not(.hide)')
  if(inputSearchValue.value === '' || visibleProjects.length === 0){
    alert('No such result found')
  }
})