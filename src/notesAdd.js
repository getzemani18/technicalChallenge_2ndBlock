const agregar = "../data/moths.json"
console.log(agregar)

let arrayMes = [];
let arrayDia = [];

const traerMes = () => {
    fetch(agregar)
    .then((response) => response.json(response))
    .then((data) => {
        arrayMes.push(data)
        iterarMes(arrayMes[0].Meses)
    })
}

// Iterando
const iterarMes = (arraydeMes) => {
    for( const [index, mes] of arraydeMes.entries()){
        let meses = document.getElementById("mes")
        meses.innerHTML += `<option onclick = "slectmes('${index}')">${mes.Mes}</option>`
        // console.log(meses)
    }
}

const iterarDia = (index) => {
    for (const dia of arrayMes[0].Meses[index].Dia) {
        let dias = document.getElementById("dia")
        dias.innerHTML += `<option>${dia}</option>`
    }
}


traerMes()