const agregar = "../data/moths.json"
console.log(agregar)

let arrayMes = [];


const traerMes = () => {
    fetch(agregar)
    .then((response) => response.json())
    .then((data) => {
        arrayMes.push(data)
        iterarMeses(arrayMes[0].Meses)
       
    
})
}


// Iterando
const iterarMeses = (arrayMes) => {
    for( const [index, mes] of arrayMes.entries()){
        let meses = document.getElementById("mes")
        meses.innerHTML += `<option>${mes.Mes}</option>`
        // console.log(meses)
    }
}


traerMes()


