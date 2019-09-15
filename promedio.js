var grades=[7,8,8,9,10,10,10]
var total=0

for (let index = 0; index < grades.length; index++) {
    total+=grades[index];    
}
const average = total / grades.length;

if (average>=8) {
    console.log("Promedio suficiente");
}else{
    console.log("Promedio insuficiente")
}

