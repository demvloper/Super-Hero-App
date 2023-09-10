const SUPERHERO_TOKEN = '1731931117255280'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const newHeroButton = document.getElementById('newHeroButton')
const heroImageDiv = document.getElementById('heroImage')
const searchButtonDiv = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            const superHero=json
            showHeroInfo(superHero)
        })
    // img=json.image.url
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}

/*const getStatsHTML = (character) =>{
    const name= `<h2>${character.name}</h2>`
    const img=`<img src="${character.image.url}" height=200 width=200 />`

    const stats=Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]}${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    })

    // console.log(stats);

    // console.log( stats.join(''))
    return stats.join('')
}*/

const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`

    const img = `<img src="${character.image.url}" height=200 width=200/>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')

    heroImageDiv.innerHTML = `${name}${img}${stats}`
}

// getSuperHero(245)

const getSearchSuperhero = (name) => {

    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            showHeroInfo(hero)
        })

}

newHeroButton.onclick = () => {
    getSuperHero(randomHero())
}

searchButtonDiv.onclick = () => {
    getSearchSuperhero(searchInput.value)
}
const randomHero = () => {
    const numberOfHeroes = 731
    return Math.ceil(Math.random() * numberOfHeroes) + 1
}

const img = 'https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg'

// document.querySelector('body').innerHTML += 'goodbye'