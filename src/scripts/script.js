let cpuArray = [
    {
        name: 'AMD Ryzen 3',
        src: './src/img/amdRyzen3',
        socket: 'AM4'
    },
    {
        name: 'AMD Ryzen 5',
        src: './src/img/amdRyzen5',
        socket: 'AM4'
    },
    {
        name: 'AMD Ryzen 7',
        src: './src/img/amdRyzen7',
        socket: 'AM4'
    },
    {
        name: 'Intel Core I3',
        src: './src/img/intelCoreI3',
        socket: 'LGA1700'
    },
    {
        name: 'Intel Core I5',
        src: './src/img/intelCoreI5',
        socket: 'LGA1700'
    },
    {
        name: 'Intel Core I7',
        src: './src/img/intelCoreI7',
        socket: 'LGA1700'
    },
    {
        name: 'Intel Core I9',
        src: './src/img/intelCoreI9',
        socket: 'LGA1700'
    }
]
let gcArray = [
    {
        name: 'Nvidia RTX 2080',
        src: './src/img/nvidiaRTX2080',
        tdp: '215W'
    },
    {
        name: 'Nvidia RTX 3090',
        src: './src/img/nvidiaRTX3090',
        tdp: '350W'
    },
    {
        name: 'Nvidia RTX 4090',
        src: './src/img/nvidiaRTX4090',
        tdp: '550W'
    }
]
let mbArray = [
    {
        name: 'Asus Prime B550M',
        src: './src/img/asusPrimeB550M',
        socket: 'AM4'
    },
    {
        name: 'Asus TUF Gaming X570-PRO',
        src: './src/img/Asus TUF Gaming X570-PRO',
        socket: 'AM4'
    },
    {
        name: 'MSI PRO Z790',
        src: './src/img/msiPROZ790',
        socket: 'LGA1700'
    },
    {
        name: 'Gigabyte Z690M',
        src: './src/img/Gigabyte Z690M',
        socket: 'LGA1700'
    },
]

let psArray = [
    {
        name: 'Thunderx3 plexus 1000',
        src: './src/img/Thunderx3 plexus 1000',
        power: '1000W'
    },
    {
        name: 'AMP 1000W White Edition',
        src: './src/img/AMP 1000W White Edition',
        power: '1000W'
    },

]

function cpuRender(target) {

    let input = document.querySelector(`input[name="${target.alt}"]`)
    input.max = cpuArray.length - 1

    let delta = event.deltaY / 200;
    // console.log(delta)
    input.value = +input.value + delta
    console.log(input.value)
    target.src = cpuArray[+input.value].src + '.png'

    let name = document.querySelector(`.${target.alt}-name`)
    name.innerText = `${cpuArray[+input.value].name}`
    let chars = document.querySelector(`.${target.alt}-chars`)
    chars.innerText = `${cpuArray[+input.value].socket}`

    document.querySelector('input[name="MB"]').value = 0
    // document.body.style.overflow = ''
}

function gcRender(target) {
    let input = document.querySelector(`input[name="${target.alt}"]`)
    input.max = gcArray.length - 1

    let delta = event.deltaY / 200;
    // console.log(delta)
    input.value = +input.value + delta
    console.log(input.value)
    target.src = gcArray[+input.value].src + '.png'

    let name = document.querySelector(`.${target.alt}-name`)
    name.innerText = `${gcArray[+input.value].name}`
    let chars = document.querySelector(`.${target.alt}-chars`)
    chars.innerText = `TDP: ${gcArray[+input.value].tdp}`
}

function mbRender(target) {
    let input = document.querySelector(`input[name="${target.alt}"]`)
    let socket = document.querySelector('.CPU-chars')
    console.log(socket.innerText)
    let filteredMBArray = mbArray.filter(item => item.socket === socket.innerText)
    console.log(filteredMBArray)
    input.max = filteredMBArray.length - 1

    let delta = event.deltaY / 200;
    // console.log(delta)
    input.value = +input.value + delta
    let newIndexMB = input.value

    // console.log(input.value)
    target.src = filteredMBArray[+input.value].src + '.png'

    let name = document.querySelector(`.${target.alt}-name`)
    name.innerText = `${filteredMBArray[+input.value].name}`
    let chars = document.querySelector(`.${target.alt}-chars`)
    chars.innerText = `${filteredMBArray[+input.value].socket}`
}

function psRender(target) {
    let input = document.querySelector(`input[name="${target.alt}"]`)
    input.max = psArray.length - 1

    let delta = event.deltaY / 200;
    // console.log(delta)
    input.value = +input.value + delta
    console.log(input.value)
    target.src = psArray[+input.value].src + '.png'

    let name = document.querySelector(`.${target.alt}-name`)
    name.innerText = `${psArray[+input.value].name}`
    let chars = document.querySelector(`.${target.alt}-chars`)
    chars.innerText = `Power: ${psArray[+input.value].power}`
}

addEventListener('wheel', (event) => {
    // event.preventDefault()
    window.scrollBy(0, 0)
    console.log(event.target.alt)
    let target = event.target
    if (target.nodeName === 'IMG') {
        if (target.alt === 'CPU') {
            cpuRender(target)
        } else if (target.alt === 'GC') {
            gcRender(target)
        } else if (target.alt === 'MB') {
            mbRender(target)
        } else if (target.alt === 'PS') {
            psRender(target)
        }
    }
})

let form = document.forms[0]
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let data = {
        cpu: document.querySelector('.CPU-name').innerText,
        gc: document.querySelector('.GC-name').innerText,
        mb: document.querySelector('.MB-name').innerText,
        ps: document.querySelector('.PS-name').innerText
    }
    // console.log(123)
    console.log(data)
    localStorage.setItem(`Data ${localStorage.length}`, JSON.stringify(data))
    location.reload()
    document.querySelector('img[name="CPU"]').src = 'src/img/nf.png'
    document.querySelector('img[name="GC"]').src = 'src/img/nf.png'
    document.querySelector('img[name="MB"]').src = 'src/img/nf.png'
    document.querySelector('img[name="PS"]').src = 'src/img/nf.png'
})
// let selections = document.querySelectorAll('.selection')
// console.log(selections[0])
// selections[0].addEventListener('mouseover', (event) => {
//     event.preventDefault()
//     console.log(123)
//
// })