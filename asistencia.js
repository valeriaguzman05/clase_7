let asistencia=[true,false,true,false,true,false,false,true,false,false];
let siAsistio=0;
let noAsistio=0;

for (let index = 0; index < asistencia.length; index++) {
    if (asistencia[index]) {
        siAsistio++
    } else {
        noAsistio++
    }
}
porcentajeDeFaltas= ((100*noAsistio)/asistencia.length);
console.log(porcentajeDeFaltas+"% de faltas.");