var audio_volume = 0.6;

const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(() => {
        currentKey.classList.remove('pressed')
    }, 250)

}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.volume = audio_volume
    audio.play();

}

document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey)
    animate(triggeredKey)
})


const slider = document.getElementById("volume__slider")
slider.oninput = (event) => {
    audio_volume = event.target.value / 100
}

// // Theme 1
// const theme_1__background = "#091921";
// const theme_1__text = "#00fff1";
// const theme_1__box_shadow = `
// inset 2px 2px 5px ${theme_1__text},
// inset -2px -2px 5px ${theme_1__text}
// `;

// // Theme 2
// const theme_2__background = "#f7c340";
// const theme_2__text = "#2d2d2d";
// const theme_2__box_shadow = `
// inset 2px 2px 5px ${theme_2__background},
// inset -2px -2px 5px ${theme_2__background}
// `;

// const change_theme = (theme) => {
//     let root = document.documentElement;
//     if (theme === "theme_1") {
//         root.style.setProperty('--background', theme_1__background);
//         root.style.setProperty('--text', theme_1__text);
//         root.style.setProperty('--box-shadow', theme_1__box_shadow);
//     } else {
//         root.style.setProperty('--background', theme_2__background);
//         root.style.setProperty('--text', theme_2__text);
//         root.style.setProperty('--box-shadow', theme_2__box_shadow);
//     }
// }

// // use of root variable in js
// var current_theme = "theme_1";
// const theme_changer = document.getElementById("util__button-theme");
// theme_changer.addEventListener("click", (e) => {
//     if (current_theme == "theme_1") {
//         change_theme("theme_2");
//         current_theme = "theme_2";
//     } else {
//         change_theme("theme_1");
//         current_theme = "theme_1";
//     }
// });

//theme 1
const theme_1__background = "#091921";
const theme_1__text ="#00fff1";

//theme 2
const theme_2__background = "#f7c340";
const theme_2__text ="#2d2d2d";

const change_theme = (theme) => {
    let root = document.documentElement
    if(theme === "theme_1")
    {
        root.style.setProperty('--background', theme_1__background)
        root.style.setProperty('--text', theme_1__text)
    }
    else
    {
        root.style.setProperty('--background', theme_2__background)
        root.style.setProperty('--text', theme_2__text)
    }
}

// use of root variable in js
var current_theme = "theme_1";
const theme_changer = document.getElementById("util__button-theme")
theme_changer.addEventListener("click", (e) => {
    if (current_theme == "theme_1") {
        change_theme("theme_2")
        current_theme = "theme_2"
    }
    else {
        change_theme("theme_1")
        current_theme = "theme_1"
    }
})

var auto_music_id;
var auto_music_on = false;
const start_auto_music = () => {
    const letters = ["w", "a", "s", "d", "j", "k", "l"]

    auto_music_id = setInterval(() => {
        const current_key = letters[Math.floor(Math.random() * letters.length)]
        makeSound(current_key)
        animate(current_key)

    }, 300)



}

const auto_music_button = document.getElementById("util__button-auto")
auto_music_button.addEventListener("click", () => {

    if (!auto_music_on) {
        start_auto_music()
        auto_music_on = true
        auto_music_button.classList.add("auto_music_on")
        auto_music_button.innerText = "Stop Auto Music"
    }
    else {
        clearInterval(auto_music_id)
        auto_music_on = false
        auto_music_button.classList.remove("auto_music_on")
        auto_music_button.innerText = "Start Auto Music"

    }
})


const makeSound = (key) => {

    switch (key) {
        case "w":
            playMusic("sounds/sound-1.mp3");
            break;
        case "a":
            playMusic("sounds/sound-2.mp3");
            break;
        case "s":
            playMusic("sounds/sound-3.mp3");
            break;
        case "d":
            playMusic("sounds/sound-4.mp3");
            break;
        case "j":
            playMusic("sounds/sound-5.mp3");
            break;
        case "k":
            playMusic("sounds/sound-6.mp3");
            break;
        case "l":
            playMusic("sounds/sound-7.mp3");
            break;
        default:
            console.log("hey wrong button!!");


    }


}

const handleDrumClick = (event) => {
    var innerHTML = event.target.innerHTML;
    animate(innerHTML)
    makeSound(innerHTML)
}

var drums = document.querySelectorAll(".drum")
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleDrumClick)
}

// Add the following function to fetch a random image from the Unsplash API:
const changeBackgroundFromAPI = () => {
    const apiKey = 'GAhmRuNTCNxNzb1HmPKS-EIbrOViaR50_ydDavWtaXg';
    const searchQuery = 'drums'; // Set the search query for drum-related images
    const apiUrl = `https://api.unsplash.com/photos/random?query=${searchQuery}&client_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            document.body.style.backgroundImage = `url(${imageUrl})`;
        })
        .catch(error => console.error('Error fetching background image:', error));
};

const backgroundApiButton = document.getElementById("util__button-background-api");
backgroundApiButton.addEventListener("click", changeBackgroundFromAPI);

// // Update the theme changer click event to toggle the class based on the current theme
// theme_changer.addEventListener("click", (e) => {
//     const container = document.querySelector(".container");
//     if (current_theme == "theme_1") {
//         change_theme("theme_2");
//         current_theme = "theme_2";
//     } else {
//         change_theme("theme_1");
//         current_theme = "theme_1";
//     }
//     container.classList.toggle("dark-mode", current_theme === "theme_1");
//     container.classList.toggle("light-mode", current_theme === "theme_2");
// });