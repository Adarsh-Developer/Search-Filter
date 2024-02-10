let projectsData = {
  data: [
    {
      projectName: "adarsh portfolio",
      link: "https://adarsh-developer.github.io/adarsh-portfolio/",
    },
    {
      projectName: "modern bank website",
      projectMadeBy: "made-with - React",
      link: "https://adarsh-developer.github.io/Modern-Bank-App/",
    },
    {
      projectName: "donkey type",
      projectMadeBy: "made-with - React",
      link: "https://adarsh-developer.github.io/Donkey-Type/",
    },
    {
      projectName: "notes website",
      link: "https://adarsh-developer.github.io/Notes-Maker/",
    },
    {
      projectName: "Dice Game",
      projectMadeBy: "made-with - React",
      link: "https://adarsh-developer.github.io/Dice-Game/",
    },
    {
      projectName: "Draggable-Cards",
      projectMadeBy: "made-with - React",
      link: "https://adarsh-developer.github.io/Draggable-Cards/",
    },
    {
      projectName: "ecommerce website",
      link: "https://adarsh-developer.github.io/Ecommerce-Website/",
    },
    {
      projectName: "movie search app",
      projectMadeBy: "made-with - React",
      link: "https://adarsh-developer.github.io/Movie-Search-App/",
    },
    {
      projectName: "Tic Tac Toe",
      projectMadeBy: "made-with - React",
      link: "https://adarsh-developer.github.io/Tic-Tac-Toe-React/",
    },
    {
      projectName: "Nike-Website",
      projectMadeBy: "made-with - React",
      link: "https://adarsh-developer.github.io/Nike-Website/",
    },
    {
      projectName: "spotify clone",
      link: "https://adarsh-developer.github.io/Spotify-Clone/",
    },
    {
      projectName: "To-Do-App",
      projectMadeBy: "made-with - React",
      link: "https://adarsh-developer.github.io/To-Do-App/",
    },
    {
      projectName: "netflix clone",
      link: "https://adarsh-developer.github.io/Netflix-Clone/",
    },
    {
      projectName: "animated landing page",
      link: "https://adarsh-developer.github.io/Animated-Landing_Page/",
    },
    {
      projectName: "form validation",
      link: "https://adarsh-developer.github.io/Form-validation/",
    },
    {
      projectName: "calculator",
      link: "https://adarsh-developer.github.io/Calculator/",
    },
    {
      projectName: "dictionary",
      link: "https://adarsh-developer.github.io/Dictionary-App/",
    },
    {
      projectName: "random joke generator",
      link: "https://adarsh-developer.github.io/Random-Joke-Generator/",
    },
    {
      projectName: "image search api",
      link: "https://adarsh-developer.github.io/Image-Search-APP/",
    },
    {
      projectName: "guess the number game",
      link: "https://adarsh-developer.github.io/Guess-the-number-game/",
    },
    {
      projectName: "tic tac toe",
      link: "https://adarsh-developer.github.io/Tic-tac-toe/",
    },
    {
      projectName: "to do list",
      link: "https://adarsh-developer.github.io/To-Do-List/",
    },
    {
      projectName: "weather api",
      link: "https://adarsh-developer.github.io/Weather-App/",
    },
    {
      projectName: "search filter",
      link: "https://adarsh-developer.github.io/Search-Filter/",
    },
    {
      projectName: "rock paper scissor",
      link: "https://adarsh-developer.github.io/Rock-Paper-Scissor/",
    },
  ],
};

// Creating all the projects...
const projectContainer = document.querySelector(".projects__container");
for (let i of projectsData.data) {
  let project = document.createElement("div");
  project.classList.add("project");
  let projectLink = document.createElement("a");
  projectLink.setAttribute("href", i.link);
  projectLink.setAttribute("target", "_blank");
  projectLink.innerHTML = i.projectName;
  project.appendChild(projectLink);
  projectContainer.appendChild(project);

  if (i.projectMadeBy) {
    let tool = document.createElement("p");
    tool.classList.add("madeby");
    tool.innerHTML = i.projectMadeBy;
    project.appendChild(tool);
  }
}

// Get the input value from the inputbar...
const inputSearchValue = document.querySelector(".searchbar");
const searchBtn = document.querySelector(".search__btn");
const eachProject = document.querySelectorAll(".project");
inputSearchValue.addEventListener("input", function () {
  // Get the value of the input
  const searchTerm = inputSearchValue.value.toLowerCase();

  // Loop through each project and check if the projectName includes the search term
  eachProject.forEach((project) => {
    const projectName = project.querySelector("a").innerHTML.toLowerCase();
    // If the project name includes the search term, show the project, otherwise hide it
    if (projectName.includes(searchTerm)) {
      project.classList.remove("hide");
    } else {
      project.classList.add("hide");
    }
  });
});

searchBtn.addEventListener("click", function () {
  const visibleProjects = document.querySelectorAll(".project:not(.hide)");
  if (inputSearchValue.value === "" || visibleProjects.length === 0) {
    alert("No such result found");
  }
});
