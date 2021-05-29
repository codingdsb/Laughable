function getNewJoke() {
    
    
     fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=sexist&type=twopart') 
        .then(response => response.json())
        .then(data => {
            setup = data.setup
            delivery = data.delivery
            document.querySelector('.part1').innerHTML = setup 
            emojis = [
                '😅', '😁', '😂', '😆', '🤣', '😹', '😜'
            ]
            randomIndexForEmoji = Math.floor(Math.random() * 7)
            document.querySelector('.part2').innerHTML = delivery + " " + emojis[randomIndexForEmoji] + emojis[randomIndexForEmoji]  + emojis[randomIndexForEmoji] 

        })
    
}

document.getElementById("reload").addEventListener("click", getNewJoke);

window.onload = getNewJoke()
