let finalDate = new Date(2019, 9, 20).getTime()
let currentTime = new Date().getTime()
let remainingTime = finalDate - currentTime


let hr_element = document.getElementById('hr')
let min_element = document.getElementById('min')
let sec_element = document.getElementById('sec')


let toHHMMSS = (t) => { 
    let hours =Math.floor(t/(1000 * 60 * 60)); 
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    let seconds = Math.floor((t % (1000 * 60)) / 1000); 

    hr_element.innerHTML = hours.toString()
    min_element.innerHTML = minutes.toString()
    sec_element.innerHTML = seconds.toString()
}

toHHMMSS(remainingTime)

setInterval(function(){ 
    toHHMMSS(remainingTime - 1000)
    remainingTime-= 1000    
}, 1000);