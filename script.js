let keys = document.querySelectorAll(".key");
document.addEventListener("keydown",(e)=>{
    if (e.key === characters[currentIndex]){
        spans[currentIndex].classList.remove("current")
        spans[currentIndex].classList.add("correct")
        currentIndex++
        spans[currentIndex].classList.add("current")
}else{
spans[currentIndex].classList.add("wrong")
}
let keyElement = document.querySelector(`[data-key="${e.key}"]`)
keyElement.classList.add("active")
})
document.addEventListener("keyup",(e)=>{
    let keyElement = document.querySelector(`[data-key="${e.key}"]`)
    keyElement.classList.remove("active")
})

let text = document.querySelector(".text");
const textVariable = 'the quick brown fox jumps over the lazy dog.';
let currentIndex = 0;
const characters = textVariable.split("");
for (const character of characters){
    const span = document.createElement("span");
    span.textContent = character;
    text.append(span)
}
let spans = document.querySelectorAll(".text span")
spans[currentIndex].classList.add("current")

