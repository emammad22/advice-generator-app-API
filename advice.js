const adviceObj = document.querySelector('.advice-text');
const adviceId = document.querySelector('.advice-id');
const adviceBtn = document.querySelector('.advice-btn');
const url = 'https://api.adviceslip.com/advice';
const delay = 5000;


let intervalID = null;





function generateAdvice() {
    fetch(url).then((response) => {
        return response.json();
    }).then(({ slip }) => {
        const { id, advice } = slip;
        adviceId.textContent = `ADVICE #${id}`
        adviceObj.textContent = `"${advice}"`;
    })
}
generateAdvice();
intervalID = setInterval(generateAdvice, delay);

adviceBtn.addEventListener('click', () => {
    if(intervalID){
        clearInterval(intervalID);
    }
    generateAdvice();
})