(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    // private name: string = 'Scott Lang';
    // private team: string;
    // public realName?: string | undefined;
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge);
})();
export {};
//# sourceMappingURL=basica.js.map