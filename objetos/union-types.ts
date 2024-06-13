(() => {
     type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }

    let myCustomVariable: string | number | Hero = 'Barry Allen';
    console.log(typeof myCustomVariable);

    myCustomVariable = 10;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Clark Kent',
        age: 60,
        powers: [1]
    }
    console.log(typeof myCustomVariable);
    
})()