let keys = document.querySelectorAll(".key");
let mistakes = 0;
let correct = 0;
let mistakesElement = document.getElementById("error-count");
let accuracyElement = document.getElementById("accuracy");
let WPM = document.getElementById("WPM");
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
            spans[currentIndex].classList.remove("wrong")
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

    WPM.textContent =Math.floor((correct/5)/(30/60));
}
let keyElement = document.querySelector(`[data-key="${e.key}"]`)
keyElement.classList.add("active")
})
document.addEventListener("keyup",(e)=>{
    let keyElement = document.querySelector(`[data-key="${e.key}"]`)
    keyElement.classList.remove("active")
})

let text = document.querySelector(".text");
const textVariable ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";
let currentIndex = 0;
const characters = textVariable.toLowerCase().split("");
for (const character of characters){
    const span = document.createElement("span");
    span.textContent = character;
    text.append(span)
}
let spans = document.querySelectorAll(".text span")
spans[currentIndex].classList.add("current")


const light = document.getElementById("light")
const dark = document.getElementById("dark")
dark.classList.add("active")
light.addEventListener('click',()=>{
    document.body.style.background = "whitesmoke"
    dark.classList.remove("active")
    light.classList.add("active")
})
dark.addEventListener('click',()=>{
    light.classList.remove("active")
    dark.classList.add("active")
    document.body.style.background = "#121212"

})
