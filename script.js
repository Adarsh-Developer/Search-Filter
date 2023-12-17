let projectsData = {
  data : [
    {
      projectName: 'adarsh portfolio',
      link: 'https://adarsh-developer.github.io/adarsh-portfolio/'
    },
    {
      projectName: 'notes website',
      link: 'https://adarsh-developer.github.io/Notes-Maker/'
    },
    {
      projectName: 'ecommerce website',
      link: 'https://adarsh-developer.github.io/Ecommerce-Website/'
    },
    {
      projectName: 'netflix clone',
      link: 'https://adarsh-developer.github.io/Netflix-Clone/'
    },
    {
      projectName: 'animated landing page',
      link: 'https://adarsh-developer.github.io/Animated-Landing_Page/'
    },
    {
      projectName: 'countdown',
      link: 'https://adarsh-developer.github.io/Countdown/'
    },
    {
      projectName: 'calculator',
      link: 'https://adarsh-developer.github.io/Calculator/'
    },
    {
      projectName: 'dictionary',
      link: 'https://adarsh-developer.github.io/Dictionary-App/'
    },
    {
      projectName: 'random joke generator',
      link: 'https://adarsh-developer.github.io/Random-Joke-Generator/'
    },
    {
      projectName: 'image search api',
      link: 'https://adarsh-developer.github.io/Image-Search-APP/'
    },
    {
      projectName: 'guess the number game',
      link: 'https://adarsh-developer.github.io/Guess-the-number-game/'
    },
    {
      projectName: 'tic tac toe',
      link: 'https://adarsh-developer.github.io/Tic-tac-toe/'
    },
    {
      projectName: 'to do list',
      link: 'https://adarsh-developer.github.io/To-Do-List/'
    },
    {
      projectName: 'weather api',
      link: 'https://adarsh-developer.github.io/Weather-App/'
    },
    {
      projectName: 'search filter',
      link: 'https://adarsh-developer.github.io/Search-Filter/'
    },
    {
      projectName: 'rock paper scissor',
      link: 'https://adarsh-developer.github.io/Rock-Paper-Scissor/'
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