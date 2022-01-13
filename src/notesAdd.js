// Ponemos el JSON
const agregar = "../data/moths.json"
console.log(agregar)


// Arreglo Vacio
let arrayMes = [];

// Fetch para empezar a iterar
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


