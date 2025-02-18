function playGif() {
    const img = document.getElementById('maidGif');
    img.src = './img/header.gif';
    setTimeout(() => {
        img.src = './img/header_still.png';
    }, 2800); // Adjust the timeout to match the duration of your GIF
}