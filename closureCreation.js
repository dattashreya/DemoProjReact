function createC() {
    let c=0;
    return function () {
        c++;
        console.log(c);
    }
}

const myC = createC();

myC();
myC();
