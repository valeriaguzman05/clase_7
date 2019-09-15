const alumnos=[{
    nombre: "Alex",
    calificaciones: [10,10,10,10,9],
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
                sumaCalificaciones += alumnos[index].calificaciones[index2];
                promedio= sumaCalificaciones / alumnos[index].calificaciones.length
            }
    if (promedio < 6) {
        console.log(alumnos[index].nombre)
        }  
    } 
    