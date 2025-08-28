// Heart Button Increase
const heartButtons = document.getElementsByClassName('heart-btn');

 for(let heartButton of heartButtons) {
    heartButton.addEventListener('click', function(){
    const heartCount = parseInt(document.getElementById('heart-count').innerText);
    const currentHeart = heartCount + 1;

    document.getElementById('heart-count').innerText = currentHeart;
})
 }
