(() => {
    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let add: addTwoNumbers;

    add = (a: number, b: number) => a + b;
})()