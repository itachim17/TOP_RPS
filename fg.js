function gib(){
    //will ask prompt get result
    const res=prompt("Choose your weapon wisely");
    let ans=look(res.toLowerCase());
    if(ans==1){
        alert("Get rekt, paper beats rock");
    }
    if(ans%2==0){
        alert(" Got Lucky, you won");
    }
    if(ans==3){
        alert("Get rekt, scissor beats paper");
    }
    if(ans==5){
        alert("Get rekt, rock beats scissor");
    }
    if(ans==7){
        alert("It's a tie");
    }
}
function getComputerChoice(p1){
    //take the computers response
    const arr=['rock','paper','scissor'];
    let randomindex=Math.floor(Math.random()*3);
    let comp=arr[randomindex];
    return comp.toLowerCase();
}
function look(p1){
    // compare and give result
    let cres=getComputerChoice(1);
    if(p1=="rock" && cres=="paper"){
        return 1;
    }
    if(p1=="rock" && cres=="scissor"){
        return 2;
    }
    if(p1=="paper" && cres=="rock"){
        return 2;
    }
    if(p1=="paper" && cres=="scissor"){
        return 3;
    }
    if(p1=="scissor" && cres=="rock"){
        return 5;
    }
    if(p1=="scissor" && cres=="paper"){
        return 4;
    }
    return 7;
}