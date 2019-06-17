function solve() {

    let string = '';

    return {
        append: (s) => string += s,
        removeStart: (n) => string = string.substr(n),
        removeEnd: (n) => string = string.substr(0, string.length - n),
        print: () => console.log(string)
    }
}


