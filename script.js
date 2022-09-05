const cards = document.querySelector("#card-dinamicas");
const templateCard = document.querySelector("#template-card").content 

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
}); 

const fetchData = async () => {
    try {
        loadindData(true);
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        pintarCard(data);
    } catch (error) {
        console.log(error);
    } finally {
        loadindData(false);
    }
};

const pintarCard = data => {
    const fragment = document.createDocumentFragment();
    data.results.forEach(element => {
        const clone = templateCard.cloneNode(true)
        clone.querySelector("h5").textContent = element.name;
        clone.querySelector("p").textContent = element.species;
        clone.querySelector("img").setAttribute("src", element.image);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};

const loadindData = (estado) => {
    const loading = document.querySelector("#loading");
    if(estado){
        loading.classList.remove("d-none");
    }else{
        loading.classList.add("d-none");
    }
}