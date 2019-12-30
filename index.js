const text = document.querySelector('.loading');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = '';

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(setFade, 160);

function setFade(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        finish();
        fadeOut();
    }
}

function finish(){
    clearInterval(timer);
    timer = null;
}

function fadeOut(){
    const init = document.querySelector('.init');
    init.classList.add('fadeout');
    setTimeout(function(){
        init.style.display = 'none';
    }, 1000);
}
