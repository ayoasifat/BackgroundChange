let input = document.querySelector('input')
let button = document.querySelector('button')

function changeColor(){
    document.body.style.backgroundColor = input.value
}
button.onclick = changeColor