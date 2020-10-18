document.addEventListener('DOMContentLoaded', () => {
    var bottomText = document.querySelector('#botText');
    var topText = document.querySelector('#topText');
    var image = document.querySelector('#image');


    document.querySelector('form').onsubmit = () => {
        // Get the text values of the captions and the image link
        let botText = bottomText.value;
        let tpText = topText.value;
        let img = image.value;

        // Get the number of memes
        let picturesDiv = document.getElementById('pictures');
        let memeNum = picturesDiv.getElementsByClassName('row justify-content-center').length;
        
        // Make the meme card
        const memeArr = makeBigCard(img, tpText, botText, memeNum+1);
        const meme = memeArr[0];


        // Add the meme to the correct field
        document.querySelector('#pictures').appendChild(meme);
        

        // Clear the field in the form
        document.querySelector('#botText').value = '';
        document.querySelector('#topText').value = '';
        document.querySelector('#image').value = '';

        return false;
    }


});



setInterval( () => {
    
    document.querySelectorAll(".remove").forEach(function(button, index) {
        button.onclick = () => {
            let picturesDiv = document.getElementById('pictures');
            let memes = picturesDiv.getElementsByClassName('row justify-content-center');
    
            let deleteMeme = memes[index];
    
            deleteMeme.remove();
        }
    });
    
}, 500);






function makeBigCard(link, tText, bText, memeNum){
    const cardArr = makeCard(link, tText, bText, memeNum);
    const smallCard = cardArr[0];

    let div = document.createElement('div');
    div.className = "row justify-content-center";
    div.appendChild(smallCard);

    return [div, cardArr[1]];
}

function makeCard(link, tText, bText, memeNum) {
    const picture = pictureDiv(link);
    const topText = tTDiv(tText);
    const botText = bTDiv(bText);
    const buttonArr = submitBot(memeNum);
    const button = buttonArr[0];
    

    let div = document.createElement('div');
    div.className = "card m-4";
    div.style.width = "700px";
    div.appendChild(picture, topText, botText);
    div.appendChild(topText);
    div.appendChild(botText);
    div.appendChild(button);

    return [div, buttonArr[1]];
}

function pictureDiv(link){
    let image = document.createElement("img");
    image.src = link;
    image.alt = "Meme";
    
    let div = document.createElement('div');
    div.style.position = "relative";
    div.appendChild(image);

    return div;
}

function tTDiv(topText){
    let div = document.createElement('div');
    div.className = "topText caption";
    div.innerHTML = topText;

    return div;
}

function bTDiv(botText){
    let div = document.createElement('div');
    div.className = "botText caption";
    div.innerHTML = botText;

    return div;
}

function submitBot(memeNum){
    let button = document.createElement("button");
    button.type = "Submit";
    button.className = "btn btn-outline-info remove";
    button.id = "remove" + memeNum.toString();
    button.innerHTML = "Remove the Meme :("
    
    let div = document.createElement('div');
    div.className = "card-body text-center";
    div.appendChild(button);

    return [div, button];
}