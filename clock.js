let hour = document.querySelector('#h')
let minute = document.querySelector('#m')
let second = document.querySelector('#s')
let time = document.querySelector('#ampm')

function clock(){
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    if(h >= 12){
        h -= 12
        time.textContent = 'PM'
    }else if(h <= 12){
        time.textContent = 'AM'
    }

    if (h < 10){
        h= '0' + h
    }else{
        h = h
    }

    if (m < 10){
        m= '0' + m
    }else{
        m = m
    }

    if (s < 10){
        s= '0' + s
    }else{
        s = s
    }

    hour.textContent = h
    minute.textContent = m
    second. textContent = s

}

setInterval(() => {
    clock()
}, 1000)

