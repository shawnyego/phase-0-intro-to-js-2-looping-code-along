// Code your solutions in this file
let names = [`steven`, `kiptoo`, `yabann`]
message = [``]

function writeCards(names, event){
    for(let i = 0; i < names.length; i++){
        message = [...message, `Thank you, ${names[i]}, for the wonderful ${event} gift!`]
    debugger
    }

    return message
}
writeCards(names, "birthday")

function countDown(){
    let n = 20;
    while (n > 0){
        console.log(n)
        n--
    }
}
countDown()