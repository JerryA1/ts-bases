(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder?: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

    // const { poder, vision } = avengers
    // console.log(poder.toFixed(2), vision.toUpperCase())

    const printAvengers = ({ vision, ...rest }: Avengers) => {
        console.log(vision.toUpperCase(), rest)
    }

    // printAvengers(avengers)

    const avengerArray: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [thor, ironman, spiderman] = avengerArray;
    // console.log(thor, ironman, spiderman)
})()