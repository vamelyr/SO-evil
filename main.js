function moveButton() {
    const button = document.getElementById("no");
    const buttonRect = button.getBoundingClientRect();
    
    
    const maxX = window.innerWidth - buttonRect.width;
    const maxY = window.innerHeight - buttonRect.height;

    // random position within the viewport
    let left = Math.min(getRandomNumber(maxX), 900);
    
    let top = Math.min(getRandomNumber(maxY), 500);

    
    // button's position
    button.style.left = left + "px";
    button.style.top = top + "px";
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('DOMContentLoaded', function () {
    const jumpscareImage = document.getElementById('jumpscare-image');

    document.getElementById('no').addEventListener('click', displayJumpscare);
    
    // to display jumpscare
    function displayJumpscare() {
        // to the jumpscare image visible
        jumpscareImage.style.display = 'block';
    
    //display audio
        const jumpscareAudio = document.getElementById('jumpscare-audio');
        jumpscareAudio.play();
        jumpscareImage.style.display = 'block';
    }
});

//if the yes button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const yesImage = document.getElementById('yes-image');
    const yesButton = document.getElementById("yes");

    yesButton.addEventListener('click', function() {
        yesImage.style.display = "block";
    });
});
