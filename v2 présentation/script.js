const cards = document.querySelector(".cards");

const movieList = [{
        name: "pirate des caraibes",
        picture: "movies/Pirates des caraibes.png",
        cat: "Pirates",
        style: "Film"
    },
    {
        name: "Les goonies",
        picture: "movies/Les goonies.png",
        cat: "Pirates",
        style: "Film"
    },
    {
        name: "hook",
        picture: "movies/hook.png",
        cat: "Pirates",
        style: "Film"
    },
    {
        name: "l'ile de blackMór",
        picture: "movies/l'ile de blackMór.png",
        cat: "Pirates",
        style: "Animat"
    },
    {
        name: "Les pirates 3D",
        picture: "movies/Les pirates 3D.png",
        cat:"Pirates",
        style:"Animat"
    },
    {
        name: "La planète au tresor",
        picture: "movies/La planète au tresor.png",
        cat:"Pirates",
        style:"Animat"
    },
    {
        name: "Les copains dans l'espace",
        picture: "movies/Les copains dans l'espace.png",
        cat: "Astronautes",
        style:"Film"
    },
    {
        name: "Explorers",
        picture: "movies/Explorers.png",
        cat: "Astronautes",
        style:"Film"
    },
    {
        name: "Space warriors",
        picture: "movies/Space warriors.png",
        cat: "Astronautes",
        style:"Film"
    },
    {
        name: "Les zévadés de l'espace",
        picture: "movies/Les zévadés de l'espace.png",
        cat: "Astronautes",
        style:"Animat"
    },
    {
        name: "Les chimpanzés de l'espace",
        picture: "movies/Les chimpanzés de l'espace.png",
        cat: "Astronautes",
        style:"Animat"
    }
    {
        name: "Wall-E",
        picture: "movies/Wall-E.png",
        cat: "Astronautes",
        style:"Animat"
    },
    {
        name: "La princesse et la grenouille",
        picture: "movies/La princesse et la grenouille.png",
        cat: "Princesses",
        style: "Animat"
    },
    {
        name: "Princesse dragon",
        picture: "movies/Princesse dragon.png",
        cat: "Princesses",
        style: "Animat"
    },
    {
        name: "Pil",
        picture: "movies/Pil.png",
        cat: "Princesses",
        style: "Animat"
    },
    {
        name: "The princess diaries",
        picture: "movies/The princess diaries.png",
        cat: "Princesses",
        style: "Film"
    },
    {
        name: "La princesse enchantée",
        picture: "movies/La princxesse enchantée.png",
        cat: "Princesses",
        style:"Film"
    },
    {
        name: "La petite princesse",
        picture: "movies/La petite princesse.png",
        cat: "Princesses",
        style: "Film"
    }
];

function createCard(title, imageUrl) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    cardHeader.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = title;
    cardBody.appendChild(cardTitle);

    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = "Watch now";
    cardBody.appendChild(cardButton);

}
for (const movies of movieList) {
    createCard(movies.name, movies.picture);
}