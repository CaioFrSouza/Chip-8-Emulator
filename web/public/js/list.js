// import { selectGame } from "./chip8.js";

// const listBody = document.querySelector(".List");
// const request = new XMLHttpRequest();

// window.onload = function () {
//     request.onload = function () {
//         if(request.response){
//             JSON.parse(request.response).rooms.forEach((element = "") => {
    
//                 const text = element.split('.')
//                 const node = document.createElement("li");
//                 node.addEventListener('click',(e) => selectGame(e.target.innerText))
//                 const textNode = document.createTextNode(text[0]);
                
//                 node.appendChild(textNode);
//                 listBody.appendChild(node);
//             });
//         }
    
//     }
    
//     request.open('GET',"/list")
//     request.send()

// }

