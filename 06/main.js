const api = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
const pokedex = [];

fetch(api)
    .then(rawdata => rawdata.json())
    .then((data) => {
        pokedex.push(...data.pokemon);
    });

function findMatches(wordToMatch, pokedex) {
    return pokedex.filter(pokeObj => {
        return isMatch(pokeObj, wordToMatch);
    });
}


function isMatch(pokeObj, wordToMatch) {

    const regExpression = new RegExp(wordToMatch, 'gi');
    return pokeObj.name.match(regExpression) || pokeObj.type.some(pokeType => {
        return pokeType.match(regExpression);
    })
}


  function displayMatches() {
    const matchArray = findMatches(this.value, pokedex);
    const html = matchArray.map(pokeObj => {
      const regex = new RegExp(this.value, 'gi');
      const pokemonName = pokeObj.name.replace(regex, `<span class="hl">${this.value}</span>`);
      const pokemonimg = pokeObj.img
      return `
        <li>
          <span class="name">${pokemonName}</span>
          <img src=${pokemonimg} alt='pokemon img'>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }



  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);