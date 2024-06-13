(()=> {

    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`;
    }

    const batman = fullName ('bruce', 'wayne', 'x');
    console.log({batman});
})()