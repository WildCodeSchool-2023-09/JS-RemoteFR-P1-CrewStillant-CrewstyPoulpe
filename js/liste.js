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
    name: "Les pirates 3D",
    picture: "movies/Les pirates 3D.png",
    cat: "Pirates",
    style: "Animat"
},

{
    name: "La planète au tresor",
    picture: "movies/La planète au tresor.png",
    cat: "Pirates",
    style: "Animat"
},

{
    name: "Les copains dans l'espace",
    picture: "movies/Les copains dans l'espace.png",
    cat: "Astronautes",
    style: "Film"
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
    style: "Film"
},

{
    name: "La petite princesse",
    picture: "movies/La petite princesse.png",
    cat: "Princesses",
    style: "animat"
}
];

function createCard(title, imageUrl, category) {
const card = document.createElement("div");
card.classList.add("card");
card.setAttribute("data-cat", category);
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
};




const div2 = document.getElementById("div2");
const valueDiv2 = div2.value; // compare la valeur avec cat

const div3 = document.getElementById("div3");
const valueDiv3 = div3.value; // compare la valeur avec style

let filtredCat = movieList;

if (valueDiv2 == "Princesses") {
filteredCat = filteredCat.filter((h) => h.cat === valueDiv2);
};
if (valueDiv2 == "Pirates") {
filteredCat = filteredCat.filter((h) => h.cat === valueDiv2);
};
if (valueDiv2 == "Astronautes") {
filteredCat = filteredCat.filter((h) => h.cat === valueDiv2);
};


let filtredStyle = filtredCat;

if (valueDiv3 == "Film") {
filteredStyle = filteredStyle.filter((g) => g.style === valueDiv3);
};
if (valueDiv3 == "animat") {
filteredStyle = filteredStyle.filter((g) => g.style === valueDiv3);
};


for (const movies of filtredStyle){
creatCard(movies.picture, movies.name);
};











