let btn = document.querySelector(".start");
btn.addEventListener("click",createQuestion);

function createQuestion(){
    let n1 = Math.floor(Math.random()*1000);
    let n2 = Math.floor(Math.random()*1000);
    let n = Math.floor(Math.random()*3);
    let ans;
    if(n == 0){
        ans = n1 + n2;
    }
    else if(n == 1){
        ans = n1 * n2;
    }
    else if(n == 2){
        ans = n1 / n2;
    }
    let op = operator(n);
    let question = `What is ${n1} ${op} ${n2} ?`;
}

function operator(n){
    if(n == 0){
        return '+';
    }
    else if(n == 1){
        return '*';
    }
    else{
        return '/';
    }
}