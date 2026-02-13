(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante {
        consquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnuns');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.consquistarMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(magneto);
})();
export {};
//# sourceMappingURL=abstract.js.map