const movieList = [{
      name: "pirate des caraibes",
      picture: './images/PirateActeur1.jpg',
      cat: "Pirates",
      style: "Film"
    },

    {
      name: "Les goonies",
      picture: "/images/PirateActeur2.jpg",
      cat: "Pirates",
      style: "Film"
    },

    {
      name: "hook",
      picture: "/images/PirateActeur3.jpg",
      cat: "Pirates",
      style: "Film"
    },

    {
      name: "l'ile de blackMór",
      picture: "/images/PirateAnime1.jpg",
      picture: "images/l'ile de blackMór.png",
      cat: "Pirates"
    },
      {
        name: "Les pirates 3D",

        picture: "/images/PirateAnime2.jpg",

        cat: "Pirates",
        style: "Animation"
      },

      {
        name: "La planète au tresor",
        picture: "/images/PirateAnime3.jpg",
        cat: "Pirates",
        style: "Animation"
      },

      {
        name: "Les copains dans l'espace",
        picture: "/images/ActeurEspace1.jpg",
        cat: "Astronautes",
        style: "Film"
      },
      {
        name: "Explorers",
        picture: "/images/ActeurEspace2.jpg",
        cat: "Astronautes",
        style: "Film"
      },

      {
        name: "Space warriors",
        picture: "/images/ActeurEspace3.jpg",
        cat: "Astronautes",
        style: "Film"
      },

      {
        name: "Les zévadés de l'espace",
        picture: "/images/AnimeEspace3.jpg",
        cat: "Astronautes",
        style: "Animation"
      },

      {
        name: "Les chimpanzés de l'espace",
        picture: "/images/AnimeEspace2.jpg",
        cat: "Astronautes",
        style: "Animation"
      },

      {
        name: "Wall-E",
        picture: "/images/AnimeEspace1.jpg",
        cat: "Astronautes",
        style: "Animation"
      },

      {
        name: "La princesse et la grenouille",
        picture: "/images/PrincesseAnime1.jpg",
        cat: "Princesses",
        style: "Animation"
      },

      {
        name: "Princesse dragon",
        picture: "/images/PrincesseAnime2.jpg",
        cat: "Princesses",
        style: "Animation"
      },

      {
        name: "Pil",
        picture: "/images/PrincesseAnime3.jpg",
        cat: "Princesses",
        style: "Animation"
      },

      {
        name: "The princess diaries",
        picture: "/images/PrincesseActeur3.jpg",
        cat: "Princesses",
        style: "Film"
      },

      {
        name: "La princesse enchantée",
        picture: "/images/PrincesseActeur1.jpg",
        cat: "Princesses",
        style: "Film"
      },

      {
        name: "La petite princesse",
        picture: "/images/PrincesseActeur2.jpg",
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



      console.log("catChoiceValue ", catChoiceValue)
      console.log("styleChoiceValue ", styleChoiceValue)

      if (catChoiceValue !== "" && styleChoiceValue !== "") {
        const filteredMovies = movieList.filter((filter) => filter.cat === catChoiceValue && filter.style === styleChoiceValue);
        console.log(filteredMovies);

        for (const movies of filteredMovies) {
          createCard(movies.picture, movies.name);
        }

      }
    });