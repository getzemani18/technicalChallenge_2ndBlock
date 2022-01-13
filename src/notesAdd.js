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
        console.log(mes.DM);
        let meses = document.getElementById("mes")
        meses.innerHTML += `
        <option>${mes.L}</option>
        <option>${mes.Mes}</option>
        <option>${mes.D2}</option>
        <option>${mes.D3}</option>
        <option>${mes.D4}</option>
        <option>${mes.D5}</option>
        <option>${mes.D6}</option>
        <option>${mes.D7}</option>
        <option>${mes.D8}</option>
        <option>${mes.D9}</option>
        <option>${mes.D10}</option>
        <option>${mes.D11}</option>
        <option>${mes.D12}</option>
        <option>${mes.D13}</option>
        <option>${mes.D14}</option>
        <option>${mes.D15}</option>
        <option>${mes.D16}</option>
        <option>${mes.D17}</option>
        <option>${mes.D18}</option>
        <option>${mes.D19}</option>
        <option>${mes.D20}</option>
        <option>${mes.D21}</option>
        <option>${mes.D22}</option>
        <option>${mes.D23}</option>
        <option>${mes.D24}</option>
        <option>${mes.D25}</option>
        <option>${mes.D26}</option>
        <option>${mes.D27}</option>
        <option>${mes.D28}</option>
        <option>${mes.D29}</option>
        <option>${mes.D30}</option>
        <option>${mes.D31}</option>
        
        `
        // console.log(meses)
    }
}


traerMes()


