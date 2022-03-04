setTimeout(function(){
    document.getElementById('numbers').classList.add("dnone");
}, 25000);
const randomNums = [];
const userNumsArray = [];
const indovinati = [];

setTimeout(function(){
    for (let index = 0; index < 5; index++) {
        const userNum=parseInt(prompt('Inserisci un numero:'));
        userNumsArray.push(userNum);
        if (randomNums.includes(userNum)){
            indovinati.push(userNum);
        }
    }

    console.log(userNumsArray);
    console.log(indovinati);
}, 30000);

randomGenerator(100);
console.log(randomNums);
function randomGenerator (max){
    for (let index = 1; index <= 5; index++) {
        num=Math.floor(Math.random()*max+1);
        randomNums.push(num);
        const element=document.createElement("div");
        element.innerHTML=num;
        document.getElementById("numbers").append(element);
    }
}
