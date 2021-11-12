function testSequenceCalls() {
    Promise.resolve().then(res => console.log(1));

    const promise1 = new Promise((resolve, reject) => {
        console.log(2);
        setTimeout(resolve);
    })

    const promise2 = new Promise((resolve, reject) => {
        console.log(3);
        resolve();
    })

    promise1.then(res => {
        console.log(4);
    })

    setTimeout(() => console.log(5))

    promise2.then(res => {
        console.log(6);
    })

    Promise.reject()
        .then(res => console.log(7))
        .catch(e => console.log(8)) // calls first catch and next then
        .then(res =>console.log(9))
        .catch(e => console.log(10))
        .then(res => console.log(1111))
        .finally(res => console.log(2222))

    for (let i = 11; i < 16; i++) {
        setTimeout(() => console.log(i));
    }

    let j;
    for (j = 16; j < 21; j++) {
        setTimeout(() => console.log(j));
    }

    console.log(17);
}

testSequenceCalls();

// 2, 3, 17, 1, 6, 8, 9, 1111, 2222, 4, 5, 11, 12, 13, 14, 15, 16, 21, 21, 21, 21, 21