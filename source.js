// Increment:
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}

// Save:
let saveEl = document.getElementById("save-el")
function save() {
    let entries = count + " - "
    saveEl.textContent += entries
    // textContent = innerText
    count = 0
    countEl.innerText = count

    // saveEl.innerText = saveEl.innerText + entries
}






















// Practice:
//? 1. (Strings)
let string1 = "This is a string!"
console.log(string1)

//? 2. (Concatinating strings)
let string2 = "This is a string" + " and this is a combined string!(starting from 'and')"
console.log(string2)

//? 3. (Just practice)
let name1 = "Abdullah"
let greeting1 = "Hi, my name is "
let myGreeting = greeting1 + name1
console.log(myGreeting + "! (string practice)")

//? 4. (Just practice)
let welcomeEl = document.getElementById("welcome-el")
let name2 = "Abdullah"
let greeting2 = "Welcome back, "

welcomeEl.innerText = greeting2 + name2
//! Using += operator to concatinate :
welcomeEl.innerText += " 👋"


