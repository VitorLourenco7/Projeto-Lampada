

const turnOn = document.querySelector(".turnOn")
const turnOff = document.querySelector(".turnOff")
const lamp = document.querySelector(".image")


function islampBroken (){
    return lamp.src.indexOf ("quebrada") > -1
}


function lampOn(){
    if(!islampBroken()){
        lamp.src = "./assets/ligada.jpg"
    }
}

function lampOff(){
    if(!islampBroken()){
        lamp.src = "./assets/desligada.jpg"
    }
}

function lampQuebra(){
    lamp.src = "./assets/quebrada.jpg"
}

turnOn.addEventListener("click", lampOn)
turnOff.addEventListener("click" , lampOff)
lamp.addEventListener("mouseover" , lampOn)
lamp.addEventListener("mouseleave" , lampOff)
lamp.addEventListener("dblclick" , lampQuebra)