(() => {
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Gerardo',
        age: 27,
        address: {
            id: 1,
            zip: 'ABC12345',
            city: 'CDMX',
        },
        getFullAddress(id: string) {
            return `${this.address.zip}, ${this.address.city}`;
        }
    }

    const client2: Client = {
        name: 'Joanna',
        age: 20,
        address: {
            id: 2,
            zip: 'DEF12345',
            city: 'CDMX',
        },
        getFullAddress(id: string) {
            return `${this.address.zip}, ${this.address.city}`;
        }
    }
})()