const button = document.querySelector(".button-1")
const blocks = document.querySelectorAll(".block")
// console.log(button)
console.log(blocks)

const changeBackground = () => {
  button.style.backgroundColor = "#AA0000"
  block.style.backgroundColor = "#AA0012"
}

button.addEventListener('click', changeBackground);


const obj = {
  a: 1,
  b: 2,
  three: 3
}

console.log('document', document)