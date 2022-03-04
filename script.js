randomGenerator(100);

function randomGenerator (max){
    for (let index = 1; index <= 5; index++) {
        num=Math.floor(Math.random()*max+1);
        console.log(num)
    }
}