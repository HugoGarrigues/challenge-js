const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }

function get(key) {
    return sourceObject[key]
}

function set(key) {
    return sourceObject[key]
}

console.log(get('str'))
console.log(set('num'))