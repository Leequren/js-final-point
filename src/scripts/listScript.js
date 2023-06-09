let dataKeys = Object.keys(localStorage)

let content = document.querySelector('.content')
for (let i of dataKeys) {
    let curData = JSON.parse(localStorage.getItem(i))
    content.innerHTML += `
    <section>
        <h3>Процессор: ${curData.cpu}</h3>
        <h3>Видеокарта: ${curData.gc}</h3>
        <h3>Материнская плата: ${curData.mb}</h3>
        <h3>Блок питания: ${curData.ps}</h3>
    </section>
    `
}