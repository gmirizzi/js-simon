randomGenerator(100);

function randomGenerator (max){
    for (let index = 1; index <= 5; index++) {
        num=Math.floor(Math.random()*max+1);
        const element=document.createElement("div");
        element.innerHTML=num;
        document.getElementById("numbers").append(element);
    }
}