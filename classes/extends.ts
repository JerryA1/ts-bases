(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            // console.log('Constructor Avenger');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName)
            // console.log('Constructor Xmen');   
        }

        get fullName() {
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe de ser mayor a 3 caracteres');
            }
            this.name = name;
        }

        getFullNameX() {
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // wolverine.fullName = 'Gerardo';
    // console.log(wolverine.fullName);
    // wolverine.getFullNameX();
})()