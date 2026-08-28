const keys = document.querySelectorAll(".key");
const resErrors =  document.querySelector(".res-errors")
const resAcc =  document.querySelector(".res-acc")
const resWPM =  document.querySelector(".res-WPM")
const retryBtn = document.querySelector(".retry-btn")
const closeBtn = document.querySelector(".close")
const resultWindow = document.querySelector(".result-window")
const retryAgain = document.querySelector(".retryAgain")
const retry = document.querySelector(".retry")
const retryIcon = document.querySelector(".retry-icon")
const retryIconSecond = document.querySelector(".retry-icon-2")
const rank = document.querySelector(".rank")


let mistakes = 0;
let correct = 0;
let currentIndex = 0;
let startTime = null;
let mistakesElement = document.getElementById("error-count");
let accuracyElement = document.getElementById("accuracy");
let WPM = document.getElementById("WPM");
document.addEventListener("keydown",(e)=>{
    if (startTime === null) {
        startTime = Date.now();
    }
        if (e.key === characters[currentIndex]){
        spans[currentIndex].classList.remove("wrong")
        spans[currentIndex].classList.remove("current")
        spans[currentIndex].classList.add("correct")

            let time = (Date.now() - startTime) / 1000 / 60;
            let wpm = (correct / 5) / time;
            WPM.textContent = Math.floor(wpm);
            resWPM.textContent = Math.floor(wpm);
            
            if (wpm <= 15){rank.textContent="🐌 Snail"} 
            if (wpm <= 25) {rank.textContent="🐢 Turtle"} 
            if (wpm <= 35) {rank.textContent="🐨 Koala"} 
            if (wpm <= 45) {rank.textContent="🦊 Fox"} 
            if (wpm <= 55) {rank.textContent="🐺 Wolf"} 
            if (wpm <= 70) {rank.textContent="⚡ Lightning"} 
            if (wpm <= 85) {rank.textContent="🏎️ Speedster"} 
            if (wpm <= 100) {rank.textContent="🔥 Blaze"} 
            if (wpm <= 120) {rank.textContent="👑 Master"} 
            else{rank.textContent="👹 Keyboard Demon"} 

    
    


        correct++
        if(currentIndex === characters.length-1){
        resultWindow.style.display = "block"
        
    }
        currentIndex++
        spans[currentIndex].classList.add("current")

}else{
spans[currentIndex].classList.add("wrong")
mistakes++
mistakesElement.textContent = mistakes
resErrors.textContent = mistakes;
}

    let accuracy = ((correct/(correct+mistakes))*100);
    accuracyElement.textContent = Math.floor(accuracy);
    resAcc.textContent = Math.floor(accuracy);


let keyElement = document.querySelector(`[data-key="${e.key}"]`)
keyElement.classList.add("active")
});
document.addEventListener("keyup",(e)=>{
    let keyElement = document.querySelector(`[data-key="${e.key}"]`)
    keyElement.classList.remove("active")
})

let text = document.querySelector(".text");
const textVariable ="The quick brown fox jumps over the lazy dog. Every day is a new chance to learn something, improve your skills, and become faster. Keep your eyes on the text, stay focused, and try to type each word correctly. Speed is important, but accuracy matters even more. Do not rush; find your rhythm and keep going!";
const characters = textVariable.toLowerCase().split("");
for (const character of characters){
    const span = document.createElement("span");
    span.textContent = character;
    text.append(span)
}
let spans = document.querySelectorAll(".text span")
spans[currentIndex].classList.add("current")

retryBtn.addEventListener('click',()=>{
    window.location.reload();
})
closeBtn.addEventListener('click',()=>{
    resultWindow.style.display = "none"
    retryAgain.style.display ="flex"
})
retry.addEventListener('click',()=>{
    window.location.reload()
})
retryBtn.addEventListener('mouseover',()=>{
    retryIcon.classList.add("active")
})
retryBtn.addEventListener('mouseout',()=>{
    retryIcon.classList.remove("active")
})
retry.addEventListener('mouseover',()=>{
    retryIconSecond.classList.add("active")
})

retry.addEventListener('mouseout',()=>{
    retryIconSecond.classList.remove("active")
})
