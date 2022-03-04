//i numeri spariscono mezzo secondo prima che compaiano i prompt
setTimeout(()=>{document.getElementById('numbers').classList.add("dnone");}, 29500);

const randomNums = [];
const userNumsArray = [];
const indovinati = [];

setTimeout(function(){
    for (let index = 0; index < 5; index++) {
        let userNum=parseInt(prompt('Inserisci un numero:'));
        while (isNaN(userNum)){
            alert('Devi inserire un numero!')
            userNum=parseInt(prompt('Inserisci un numero:'));
        }
        userNumsArray.push(userNum);
        if (randomNums.includes(userNum)){
            indovinati.push(userNum);
        }
    }
    console.log(userNumsArray);
    if (indovinati.length==0){
        document.getElementById("output").innerHTML=`Non ne hai indovinato nemmeno uno :(`  
    } else {        
        document.getElementById("output").innerHTML=`Ne hai indovinati ${indovinati.length}: ${indovinati}.`
    }
}, 30000);

randomGenerator(100);
console.log(randomNums);
function randomGenerator (max){
    let index = 1
    while (index <= 5) {
        let num=Math.floor(Math.random()*max+1);
        if (!randomNums.includes(num)){
            randomNums.push(num);
            const element=document.createElement("div");
            element.innerHTML=num;
            document.getElementById("numbers").append(element);
            index++;
        }
    }
}