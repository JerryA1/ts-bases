(()=> {
    const fullName = (firstName: string, lastName: string): string => {
        if (!firstName || !lastName) {
            throw Error('Parameters missing');
        }

        return `${firstName} ${lastName}`;
    }

    const name = fullName('Tony', 'Stark');
    console.log({ name });
})()