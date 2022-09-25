//^ Passenger Counter :

//& Selecting the count, previous entries and sum paragraphs:
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")

//& Making variables:
let count = 0
let saved = 0
let sumed = 0

//& Increment function:
function increment() {
    count = count + 1
    countEl.textContent = count
}

//& Save and Sum function:
function save() {
    if (count != 0) {
        saveEl.textContent = saveEl.textContent + count + " - "
        saved = count
        count = 0
        countEl.textContent = count
        sumed = sumed + saved
        sumEl.textContent = "Sum : " + sumed
    }
}