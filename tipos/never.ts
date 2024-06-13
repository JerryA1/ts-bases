(()=> {
    const error = (message: string): (never | number) => {
        throw new Error(message);

        return 1
    }

    error('This is an error');
    console.log('Esto no se va a ejecutar');
    
})()