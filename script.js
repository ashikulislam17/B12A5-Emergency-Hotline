// Heart Button Increase
const heartButtons = document.getElementsByClassName('heart-btn');

 for(let heartButton of heartButtons) {
    heartButton.addEventListener('click', function(){
    const heartCount = parseInt(document.getElementById('heart-count').innerText);
    const currentHeart = heartCount + 1;

    document.getElementById('heart-count').innerText = currentHeart;
})
 }



// Call button functionalities 
const callBtns = document.getElementsByClassName('call-btn');

for (let callButton of callBtns) {
    callButton.addEventListener('click', function () {
        
        const contactCard = callButton.closest('.contact-card');

        const callTitle = contactCard.querySelector('.contact-title').innerText;
        const callNumber = contactCard.querySelector('.contact-number').innerText;

        const coinElement = document.getElementById('coin-balance');
        let currentCoins = parseInt(coinElement.innerText);

        if (currentCoins >= 20) {
            alert(`Calling ${callTitle} at ${callNumber}...`);

            const newBalance = currentCoins - 20;
            coinElement.innerText = newBalance;

            const currentTime = new Date().toLocaleTimeString();
            const historyClear = document.getElementById('call-history');

            const newCard = document.createElement("div");
            newCard.innerHTML = `
                <div class="w-11/12 px-1 md:px-2 mx-auto mt-2 bg-[#F2F2F2] rounded-xl flex justify-between items-center flex-col md:flex-row py-2">
                    <div class="">
                        <h2 class="text-base md:text-xl font-bold">${callTitle}</h2>
                        <p class="py-2 text-[#5C5C5C]">${callNumber}</p>
                    </div>
                    <div>
                        <p class="text-sm text-[#5C5C5C]">${currentTime}</p>
                    </div>
                </div>
            `;

            historyClear.append(newCard);
        } else {
            alert("🚨You do not have enough coins. At least 20 coins are required to make a call.");
            return;
        }
    });
}

 
// Call History Clear
document.getElementById('btn-clear').addEventListener('click', function () {
    const callHistoryClear = document.getElementById('call-history');
    callHistoryClear.innerHTML = "";
})


//  Copy Button Functionalities
const copyButtons = document.getElementsByClassName('copy-btn');

for(let copyButton of copyButtons){
    copyButton.addEventListener('click', function (){
        
        const numberToCopy = copyButton.parentNode.parentNode.querySelector('.contact-number').innerText;
        navigator.clipboard.writeText(numberToCopy).then(() => {
        alert(`The number has been copied ${numberToCopy}`)

        const copyCount = document.getElementById('copy-count');
            let currentCount = parseInt(copyCount.innerText);
            copyCount.innerText = currentCount + 1;
            });
    });
};






// Copy Button Functionalities

// const copyButtons = document.getElementsByClassName('copy-btn');

// for (let copyButton of copyButtons) {
//     copyButton.addEventListener('click', function () {
//         // card element ধরছি
//         const card = copyButton.closest('.card');

//         // card এর ভেতরের number element ধরছি
//         const numberToCopy = card.querySelector('.number').innerText;

//         navigator.clipboard.writeText(numberToCopy).then(() => {
//             alert(`The number has been copied: ${numberToCopy}`);

//             const copyCount = document.getElementById('copy-count');
//             let currentCount = parseInt(copyCount.innerText);
//             copyCount.innerText = currentCount + 1;
//         });
//     });
// }
