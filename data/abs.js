function isPositive(number) {
    if (number < 0) {
        return false
    } else {
        return true
    }
}

function abs(number) {
    if (isPositive(number)) {
        return number
    } else {
        return(number*-1)
    }
}


console.log(isPositive(-3))
console.log(abs(-3))