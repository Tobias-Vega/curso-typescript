(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clack Kent',
        age: 60,
        powers: ['Super fuerza'],
        getNombre() {
            return this.name;
        }
    };
})();
export {};
