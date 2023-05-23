const arg = 'ratio nulos';

var x = 'exemple de fou malade'

function words (arg){
    return arg.split(" ")
}
function sentence (arg){
    return words(arg).join(" ")
}
function yell (arg){
    return arg.toUpperCase()
}
function whisper (arg){
    return yell(arg).toLowerCase()
}

function capitalize(arg) {
    return arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
}

console.log(words(arg))
console.log(sentence(arg))
console.log(yell(arg))
console.log(whisper(arg))
console.log(capitalize(arg))