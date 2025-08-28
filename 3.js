function countAll(str) {
    let result = {
        "HARFLAR": 0,
        "RAQAMLAR": 0
    };

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            result["HARFLAR"]++;
        } else if (/[0-9]/.test(char)) {
            result["RAQAMLAR"]++;
        }
    }

    return result;
}

console.log(countAll("Hello World"));
console.log(countAll("H3ll0 Wor1d"));
console.log(countAll("149990"));
