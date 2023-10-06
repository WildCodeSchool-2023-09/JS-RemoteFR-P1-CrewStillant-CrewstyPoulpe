const movieList = [{
    name: "pirate des caraibes",
<<<<<<< HEAD
    picture: './images/PirateActeur1.jpg',
=======
    picture: "images/Pirates des caraibes.png",
>>>>>>> main
    cat: "Pirates",
    style: "Film"
  },

  {
    name: "Les goonies",
<<<<<<< HEAD
    picture: "/images/PirateActeur2.jpg",
=======
    picture: "images/Les goonies.png",
>>>>>>> main
    cat: "Pirates",
    style: "Film"
  },

  {
    name: "hook",
<<<<<<< HEAD
    picture: "/images/PirateActeur3.jpg",
=======
    picture: "images/hook.png",
>>>>>>> main
    cat: "Pirates",
    style: "Film"
  },

  {
    name: "l'ile de blackMór",
<<<<<<< HEAD
    picture: "/images/PirateAnime1.jpg",
=======
    picture: "images/l'ile de blackMór.png",
>>>>>>> main
    cat: "Pirates",
    style: "Animation"
  },

  {
    name: "Les pirates 3D",
<<<<<<< HEAD
    picture: "/images/PirateAnime2.jpg",
=======
    picture: "images/Les pirates 3D.png",
>>>>>>> main
    cat: "Pirates",
    style: "Animation"
  },

  {
    name: "La planète au tresor",
<<<<<<< HEAD
    picture: "/images/PirateAnime3.jpg",
=======
    picture: "images/La planète au tresor.png",
>>>>>>> main
    cat: "Pirates",
    style: "Animation"
  },

  {
    name: "Les copains dans l'espace",
<<<<<<< HEAD
    picture: "/images/ActeurEspace1.jpg",
=======
    picture: "images/Les copains dans l'espace.png",
>>>>>>> main
    cat: "Astronautes",
    style: "Film"
  },
  {
    name: "Explorers",
<<<<<<< HEAD
    picture: "/images/ActeurEspace2.jpg",
=======
    picture: "images/Explorers.png",
>>>>>>> main
    cat: "Astronautes",
    style: "Film"
  },

  {
    name: "Space warriors",
<<<<<<< HEAD
    picture: "/images/ActeurEspace3.jpg",
=======
    picture: "images/Space warriors.png",
>>>>>>> main
    cat: "Astronautes",
    style: "Film"
  },

  {
    name: "Les zévadés de l'espace",
<<<<<<< HEAD
    picture: "/images/AnimeEspace3.jpg",
=======
    picture: "images/Les zévadés de l'espace.png",
>>>>>>> main
    cat: "Astronautes",
    style: "Animation"
  },

  {
    name: "Les chimpanzés de l'espace",
<<<<<<< HEAD
    picture: "/images/AnimeEspace2.jpg",
=======
    picture: "images/Les chimpanzés de l'espace.png",
>>>>>>> main
    cat: "Astronautes",
    style: "Animation"
  },

  {
    name: "Wall-E",
<<<<<<< HEAD
    picture: "/images/AnimeEspace1.jpg",
=======
    picture: "images/Wall-E.png",
>>>>>>> main
    cat: "Astronautes",
    style: "Animation"
  },

  {
    name: "La princesse et la grenouille",
<<<<<<< HEAD
    picture: "/images/PrincesseAnime1.jpg",
=======
    picture: "images/La princesse et la grenouille.png",
>>>>>>> main
    cat: "Princesses",
    style: "Animation"
  },

  {
    name: "Princesse dragon",
<<<<<<< HEAD
    picture: "/images/PrincesseAnime2.jpg",
=======
    picture: "images/Princesse dragon.png",
>>>>>>> main
    cat: "Princesses",
    style: "Animation"
  },

  {
    name: "Pil",
<<<<<<< HEAD
    picture: "/images/PrincesseAnime3.jpg",
=======
    picture: "images/Pil.png",
>>>>>>> main
    cat: "Princesses",
    style: "Animation"
  },

  {
    name: "The princess diaries",
<<<<<<< HEAD
    picture: "/images/PrincesseActeur3.jpg",
=======
    picture: "images/The princess diaries.png",
>>>>>>> main
    cat: "Princesses",
    style: "Film"
  },

  {
    name: "La princesse enchantée",
<<<<<<< HEAD
    picture: "/images/PrincesseActeur1.jpg",
=======
    picture: "images/La princxesse enchantée.png",
>>>>>>> main
    cat: "Princesses",
    style: "Film"
  },

  {
    name: "La petite princesse",
<<<<<<< HEAD
    picture: "/images/PrincesseActeur2.jpg",
=======
    picture: "images/La petite princesse.png",
>>>>>>> main
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

<<<<<<< HEAD
  function createCard(picture, title) {
    const cards = document.querySelector("#div5");
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("img");
    cardImg.src = picture;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = (title);
    cardBody.appendChild(cardTitle);

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = "Watch now";
    cardBody.appendChild(cardButton);
  };

  const cards = document.querySelector(".cards");


=======
>>>>>>> main
  console.log("catChoiceValue ", catChoiceValue)
  console.log("styleChoiceValue ", styleChoiceValue)

  if (catChoiceValue !== "" && styleChoiceValue !== "") {
    const filteredMovies = movieList.filter((filter) => filter.cat === catChoiceValue && filter.style === styleChoiceValue);
    console.log(filteredMovies);
<<<<<<< HEAD
    for (const movies of filteredMovies) {
      createCard(movies.picture, movies.name);
    }
=======
>>>>>>> main
  }
});