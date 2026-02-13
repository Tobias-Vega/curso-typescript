(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis... el único');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis... el único');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis... el único');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
export {};
//# sourceMappingURL=private-constructors.js.map