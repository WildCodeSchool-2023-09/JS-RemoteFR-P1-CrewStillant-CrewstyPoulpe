const movieList = [{
    name: "pirate des caraibes",
    picture: "images/Pirates des caraibes.png",
    cat: "Pirates",
    style: "Film"
  },

  {
    name: "Les goonies",
    picture: "images/Les goonies.png",
    cat: "Pirates",
    style: "Film"
  },

  {
    name: "hook",
    picture: "images/hook.png",
    cat: "Pirates",
    style: "Film"
  },

  {
    name: "l'ile de blackMór",
    picture: "images/l'ile de blackMór.png",
    cat: "Pirates",
    style: "Animation"
  },

  {
    name: "Les pirates 3D",
    picture: "images/Les pirates 3D.png",
    cat: "Pirates",
    style: "Animation"
  },

  {
    name: "La planète au tresor",
    picture: "images/La planète au tresor.png",
    cat: "Pirates",
    style: "Animation"
  },

  {
    name: "Les copains dans l'espace",
    picture: "images/Les copains dans l'espace.png",
    cat: "Astronautes",
    style: "Film"
  },
  {
    name: "Explorers",
    picture: "images/Explorers.png",
    cat: "Astronautes",
    style: "Film"
  },

  {
    name: "Space warriors",
    picture: "images/Space warriors.png",
    cat: "Astronautes",
    style: "Film"
  },

  {
    name: "Les zévadés de l'espace",
    picture: "images/Les zévadés de l'espace.png",
    cat: "Astronautes",
    style: "Animation"
  },

  {
    name: "Les chimpanzés de l'espace",
    picture: "images/Les chimpanzés de l'espace.png",
    cat: "Astronautes",
    style: "Animation"
  },

  {
    name: "Wall-E",
    picture: "images/Wall-E.png",
    cat: "Astronautes",
    style: "Animation"
  },

  {
    name: "La princesse et la grenouille",
    picture: "images/La princesse et la grenouille.png",
    cat: "Princesses",
    style: "Animation"
  },

  {
    name: "Princesse dragon",
    picture: "images/Princesse dragon.png",
    cat: "Princesses",
    style: "Animation"
  },

  {
    name: "Pil",
    picture: "images/Pil.png",
    cat: "Princesses",
    style: "Animation"
  },

  {
    name: "The princess diaries",
    picture: "images/The princess diaries.png",
    cat: "Princesses",
    style: "Film"
  },

  {
    name: "La princesse enchantée",
    picture: "images/La princxesse enchantée.png",
    cat: "Princesses",
    style: "Film"
  },

  {
    name: "La petite princesse",
    picture: "images/La petite princesse.png",
    cat: "Princesses",
    style: "Film"
  }
];

const startButton = document.getElementById("startButton");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");

const catChoices = document.querySelectorAll(".catButton");
const styleChoices = document.querySelectorAll(".styleButton");

startButton.addEventListener("click", function () {
  div1.classList.remove("show");
  div2.classList.add("show");
});

let catChoiceValue = "";
catChoices.forEach((catChoice) => {
  catChoice.addEventListener("click", (event) => {
    catChoiceValue = event.target.value;
    div2.classList.remove("show");
    div3.classList.add("show");
  });
});

let styleChoiceValue = "";
styleChoices.forEach((styleChoice) => {
  styleChoice.addEventListener("click", (event) => {
    styleChoiceValue = event.target.value;
    div3.classList.remove("show");
    div4.classList.add("show");
  });
});

laSelectionButton.addEventListener("click", function () {
  div4.classList.remove("show");
  div5.classList.add("show");

  console.log("catChoiceValue ", catChoiceValue)
  console.log("styleChoiceValue ", styleChoiceValue)

  if (catChoiceValue !== "" && styleChoiceValue !== "") {
    const filteredMovies = movieList.filter((filter) => filter.cat === catChoiceValue && filter.style === styleChoiceValue);
    console.log(filteredMovies);
  }
});