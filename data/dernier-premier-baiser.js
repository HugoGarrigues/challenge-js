function first(tab) {
    return tab.shift();
}

function last(tab) {
    return tab.unshift();
}

function kiss(tab) {
    arg2 = last(tab);
    arg1 = first(tab);
    return [arg1, arg2];
}

function kiss2(tab) {
    arg1 = tab[0];
    arg2 = tab[tab.length - 1];
    return [arg1, arg2];
}



console.log(first([1, 2, 3, 4, 5]))
console.log(last([1, 2, 3, 4, 5]))
console.log(kiss([1, 2, 3, 4, 5]))
console.log(kiss2([1, 2, 3, 4, 5]))
