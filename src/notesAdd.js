const agregar = "../data/moths.json"
console.log(agregar)

let arrayMes = [];

const traerMes = () => {
    fetch(agregar)
    .then((response) => response.json())
    .then((data) => {
        arrayMes.push(data)
        
        // Iterar Meses
        // for (const months in arrayMes[0]["Meses"]) {
        //    console.log(months);
        //    let mesesImp = document.getElementById("mes")
        //    mesesImp.innerHTML += `<option></option>`
        // }

        // Iterar DIas
        for (const dias of arrayMes[0].Meses) {
            console.log(dias);
            let mesesImp = document.getElementById("mes")
             mesesImp.innerHTML += `<option>${dias.Mes}</option>`
             
        }

})
}

traerMes()
// Iterando
// const iterarMes = (arraydeMes) => {
//     for( const [index, mes] of arraydeMes.entries()){
//         let meses = document.getElementById("mes")
//         meses.innerHTML += `<option onclick = "slectmes('${index}')">${mes.Mes}</option>`
//         // console.log(meses)
//     }
// }

// const iterarDia = (index) => {
//     for (const dia of Meses[0].Dia) {
//         console.log(Meses[0].Dia);
//         let dias = document.getElementById("dia")
//         dias.innerHTML += `<option>${dia}</option>`
//         console.log(dias);
//     }
// }



