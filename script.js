let keys = document.querySelectorAll(".key");
let mistakes = 0;
let correct = 0;
let mistakesElement = document.getElementById("error-count");
let accuracyElement = document.getElementById("accuracy");
document.addEventListener("keydown",(e)=>{
    if(currentIndex >= characters.length-1){
        spans[currentIndex].classList.remove("current")
        if (e.key === characters[currentIndex]){
            spans[currentIndex].classList.add("correct")
        }else{
        }
        let choice = confirm("Retry?")
        if(choice === true){
            window.location.reload();
        }
    }else{
        if (e.key === characters[currentIndex]){
        spans[currentIndex].classList.remove("current")
        spans[currentIndex].classList.add("correct")
        correct++
        currentIndex++
        spans[currentIndex].classList.add("current")
}else{
spans[currentIndex].classList.add("wrong")
mistakes++
mistakesElement.textContent = mistakes
}
let accuracy = ((correct/(correct+mistakes))*100);
        accuracyElement.textContent = Math.floor(accuracy)
    }

let keyElement = document.querySelector(`[data-key="${e.key}"]`)
keyElement.classList.add("active")
})
document.addEventListener("keyup",(e)=>{
    let keyElement = document.querySelector(`[data-key="${e.key}"]`)
    keyElement.classList.remove("active")
})

let text = document.querySelector(".text");
const textVariable ="Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
let currentIndex = 0;
const characters = textVariable.toLowerCase().split("");
for (const character of characters){
    const span = document.createElement("span");
    span.textContent = character;
    text.append(span)
}
let spans = document.querySelectorAll(".text span")
spans[currentIndex].classList.add("current")
