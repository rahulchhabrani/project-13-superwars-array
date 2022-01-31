const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    players.map((player, index) => {
        let characters = {
            name: player,
            strength: 100,
            image: 'images/super-' + (index + 1) + '.png',
            type: "hero|villain"
        }
        detailedPlayers.push(characters)
    })


    // Instead of forloop use Map method
    // Code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.floor(Math.ceil(Math.random() * 100));
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';


    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    if (type === 'hero') {
        players.map((element, i) => {
            if (i % 2 === 0) {
                fragment += '<div class="player"> \
        <img src="' + element.image + '"alt="">\
        <div class="name">' + element.name + '</div>\
        <div class="strength">' + getRandomStrength() + '</div></div>'
            }

        })

    } else {
        players.map((element, i) => {
            if (i % 2 != 0) {
                fragment += '<div class="player"> \
        <img src="' + element.image + '"alt="">\
        <div class="name">' + element.name + '</div>\
        <div class="strength">' + getRandomStrength() + '</div></div>'
            }

        })
    }

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}