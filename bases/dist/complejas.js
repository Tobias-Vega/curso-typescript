(() => {
    const client = {
        name: 'Tobías',
        age: 20,
        address: {
            id: 125,
            zip: 'KY2 DUD',
            city: 'Formosa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K25 U2A'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
export {};
//# sourceMappingURL=complejas.js.map