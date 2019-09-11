var examenes=[8,5,8,2,5,8,9,6,8,9,2]
var examenesRepetir=0;
for (let index = 0; index < examenes.length; index++) {
    if (examenes[index] < 6) {
        examenesRepetir++
    }
}
console.log(examenesRepetir);
