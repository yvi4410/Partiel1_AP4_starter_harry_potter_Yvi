async function fetchCharacters() {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    const data = await response.json();
    const limitedCharacters = data.slice(0, 12);
    const charactersHtml = limitedCharacters.map(character => createCharacterCard(character)).join('');
    charactersContainer.innerHTML = charactersHtml;
}


const charactersContainer = document.querySelector('.characters');


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


fetchCharacters();
