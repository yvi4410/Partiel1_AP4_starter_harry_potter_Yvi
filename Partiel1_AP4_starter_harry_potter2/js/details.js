const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const house = params.get('house');
const image = params.get('image');
const gender = params.get('gender');
const eyeColor = params.get('eyeColor');
const hairColor = params.get('hairColor');
const dateOfBirth = params.get('dateOfBirth');
const patronus = params.get('patronus');

// Mettre à jour le contenu de la page avec les informations du personnage
document.getElementById('character-name').textContent = name;
document.getElementById('character-figcaption').textContent = name;
document.getElementById('character-image').src = image;
document.getElementById('character-gender').textContent = gender || 'Unknown';
document.getElementById('character-eye').textContent = eyeColor || 'Unknown';
document.getElementById('character-hair').textContent = hairColor || 'Unknown';
document.getElementById('character-dob').textContent = dateOfBirth || 'Unknown';
document.getElementById('character-patronus').textContent = patronus || 'Unknown';

const houseImage = document.getElementById('house-image');
switch (house) {
    case 'Gryffindor':
        houseImage.src = './images/logo/Gryffindor.png';
        break;
    case 'Slytherin':
        houseImage.src = './images/logo/Slytherin.png';
        break;
    case 'Hufflepuff':
        houseImage.src = './images/logo/Hufflepuff.png';
        break;
    case 'Ravenclaw':
        houseImage.src = './images/logo/Ravenclaw.png';
        break;
    default:
        houseImage.src = './images/logo/default.png';
        break;
}

document.title = `${name} - Harry Potter`;
