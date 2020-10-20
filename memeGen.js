document.addEventListener('DOMContentLoaded', () => {
    var bottomText = document.querySelector('#botText');
    var topText = document.querySelector('#topText');
    var image = document.querySelector('#image');
    var picturesDiv = document.querySelector('#pictures');
    


    document.querySelector('form').onsubmit = () => {
        // Get the text values of the captions and the image link
        let botText = bottomText.value;
        let tpText = topText.value;
        let img = image.value;

        // Get the value of the top and bottom caption sizes
        var topCap = document.querySelector('#TopCaptionSize').value;
        var botCap = document.querySelector('#BotCaptionSize').value;

        // Make the meme card
        const meme = makeBigCard(img, tpText, botText, topCap, botCap);
        
        // Add the meme to the correct field
        document.querySelector('#pictures').appendChild(meme);
        

        // Clear the field in the form
        document.querySelector('#botText').value = '';
        document.querySelector('#topText').value = '';
        document.querySelector('#image').value = '';

        return false;
    }


    var picturesDiv = document.querySelector('#pictures');

    picturesDiv.addEventListener("click", function(event){
    if(event.target.tagName == "BUTTON"){
        event.target.parentElement.parentElement.parentElement.remove();
    }

});

});






function makeBigCard(link, tText, bText, topCap, botCap){
    const card = makeCard(link, tText, bText, topCap, botCap);

    let div = document.createElement('div');
    div.className = "row justify-content-center";
    div.appendChild(card);

    return div;
}

function makeCard(link, tText, bText, topCap, botCap) {
    const picture = pictureDiv(link);
    const topText = tTDiv(tText, topCap);
    const botText = bTDiv(bText, botCap);
    const button = submitBot();
    

    let div = document.createElement('div');
    div.className = "card m-4";
    div.style.width = "700px";
    div.appendChild(picture, topText, botText);
    div.appendChild(topText);
    div.appendChild(botText);
    div.appendChild(button);

    return div;
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

function tTDiv(topText, topCap){
    let div = document.createElement('div');
    div.className = "topText caption " + topCap + "Text";
    div.innerHTML = topText;

    return div;
}

function bTDiv(botText, botCap){
    let div = document.createElement('div');
    div.className = "botText caption " + botCap + "Text";
    div.innerHTML = botText;

    return div;
}

function submitBot(){
    let button = document.createElement("button");
    button.type = "Submit";
    button.className = "btn btn-outline-info remove";
    button.id = "remove";
    button.innerHTML = "Remove the Meme :("
    
    let div = document.createElement('div');
    div.className = "card-body text-center";
    div.appendChild(button);

    return div;
}