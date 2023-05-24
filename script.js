

let students = [
studentOne = {
name: "julio" ,
NotaFirstExam: 5,
NotaSecondExam:8,

},

studentTwo = {
name:"isabella",
NotaFirstExam:5,
NotaSecondExam:9,

},

studentThree = {
name:"noninho",
NotaFirstExam:7,
NotaSecondExam:10,

},

studentFour = {
name:"mofide",
NotaFirstExam:4,
NotaSecondExam:3,

}
]
let avarage = (Number(NotaFirstExam) + Number(NotaSecondExam)) /2
let result = avarage > 6


if(result)
for(studante of students) {
alert(`congrats${studentOne.name} passo de ano sua media foi ${avarage}`)
alert(`congrats${studentTwo.name} passo de ano sua media foi ${avarage}`)
alert(`congrats${studentThree.name} passo de ano sua media foi ${avarage}`)
alert(`congrats${studentFour.name} passo de ano sua media foi ${avarage}`)

} else {
    for(studante of students)
    alert(`nem passo em${studentOne.name}  sua media foi ${avarage}`)
    alert(`nem passo em${studentTwo.name}  sua media foi ${avarage}`)
    alert(`nem passo em${studentThree.name}  sua media foi ${avarage}`)
    alert(`nem passo em${studentFour.name}  sua media foi ${avarage}`)
}



