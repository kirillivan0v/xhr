let buttons = document.querySelectorAll('button');
let dynBlock = document.querySelector('.dynamicBlock');
let span = document.querySelector('#specialWord');

/* clickHandler */


function loadFile(event){
    let name = event.target.dataset.text;
    let request = new XMLHttpRequest();
        request.open('GET', `files/${name}.html`);
        request.onload = () => {
            dynBlock.innerHTML = request.responseText; // this ?
            console.log('Succes');
        }
        request.send();
        span.innerText = name;
}


/* eventListeners */

buttons.forEach(element => {
    element.addEventListener('click', loadFile)
})


