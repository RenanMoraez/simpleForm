function typeWriter(element){
    const textArray = element.innerHTML.split('')
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
            setTimeout(() => element.innerHTML += letra, 75 * i)
    })
}


const letras = document.querySelector('')
typeWriter(letras)

console.log(letras)