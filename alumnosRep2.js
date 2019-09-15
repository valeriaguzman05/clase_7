const alumnos=[{
    nombre: "Alex",
    calificaciones: [3,4,5,2,2],
}, {
    nombre: "Val",
    calificaciones: [8,4,9,8,7],
}, {
    nombre: "Lili",
    calificaciones: [8,7,9,6,9],
}]



    for (let index = 0; index < alumnos.length; index++) {
        let promedio = 0
        let sumaCalificaciones = 0
        for (let index2 = 0; index2 < alumnos[index].calificaciones.length; index2 ++) {
                sumaCalificaciones = sumaCalificaciones + alumnos[index].calificaciones[index2];
                promedio= sumaCalificaciones / alumnos[index].calificaciones.length
        }
    resultado = (promedio < 6) ? alumnos[index].nombre :""
    console.log(resultado)
        //if (promedio < 6) {
        //console.log(alumnos[index].nombre)
    //}  
    } 