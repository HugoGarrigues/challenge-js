function sign(number) {
    if (number > 0) {
        return 1
    } else if (number < 0) {
        return -1
    } else {
        return 0
    }
}

console.log(sign(8));