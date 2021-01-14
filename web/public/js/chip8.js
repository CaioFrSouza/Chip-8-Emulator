import Renderer from './renderer.js';
import KeyBoard from './keyboard.js';
import song from './song.js';
import CPU from './cpu.js';

window.onload = function () {
const renderer = new Renderer(10);
const keyBoad = new KeyBoard();
const Speaker = new song();
const cpu = new CPU (renderer,keyBoad,Speaker)
const title = document.querySelector('#gameTitle');

let loop;
let fps = 60, fpsInterval, startTime, now, elapsed, gameName;
let then = -3000;
if(!gameName){
    title.textContent = `Escolha um jogo `
}
function step() {
    now = Date.now();
    elapsed = now - then;

    if(elapsed > fpsInterval){
        cpu.cycle()
    }
    loop = requestAnimationFrame(step);
}
const listBody = document.querySelector(".List");
const request = new XMLHttpRequest();
request.onload = function () {
    if(request.response){
        JSON.parse(request.response).rooms.forEach((element = "") => {

            const text = element.split('.')
            const node = document.createElement("li");
            node.addEventListener('click',(e) => selectGame(e.target.innerText))
            const textNode = document.createTextNode(text[0]);
            
            node.appendChild(textNode);
            listBody.appendChild(node);
        });
    }}

    request.open('GET',"/list")
    request.send()
function selectGame (select) {
    
    
        console.log('read')
        loop = undefined
        then = Date.now();
        fpsInterval = 1000 / fps;
        startTime = then;

        title.textContent=select

        cpu.loadSpritesIntoMemory();
        cpu.loadRoom(`${select}.ch8`); 
        loop = requestAnimationFrame(step)
    
    }
}