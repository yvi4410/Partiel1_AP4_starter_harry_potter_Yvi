const apiUrl = 'https://hp-api.onrender.com/api/characters';
const charactersContainer = document.querySelector('.characters');
const houseButtons = document.querySelectorAll('.houses > div');
let allCharacters = [];

function createCharacterCard(character) {
    let houseClass = '';
    switch (character.house) {
        case 'Gryffindor':
            houseClass = 'griffondor';
            break;
        case 'Slytherin':
            houseClass = 'serpentard';
            break;
        case 'Hufflepuff':
            houseClass = 'poufsouffle';
            break;
        case 'Ravenclaw':
            houseClass = 'serdaigle';
            break;
        default:
            houseClass = 'default-house';
            break;
    }

    return `
    <div class="${houseClass}">
      <img src="${character.image}" alt="${character.name}">
      <p>${character.name}</p>
    </div>
  `;
}

function displayCharacters(characters) {
    const charactersHtml = characters.map(character => createCharacterCard(character)).join('');
    charactersContainer.innerHTML = charactersHtml;
}

function filterByHouse(house) {
    const filteredCharacters = allCharacters.filter(character => character.house === house);
    displayCharacters(filteredCharacters);
}

async function fetchCharacters() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        allCharacters = data.slice(0, 12);
        displayCharacters(allCharacters);
}

houseButtons.forEach(button => {button.addEventListener('click', (event) => {const houseName = event.currentTarget.getAttribute('data-house');filterByHouse(houseName);});});

fetchCharacters();
