(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }
    // private name: string = 'Scott Lang';
    // private team: string;
    // public realName?: string | undefined;
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.getAvgAge());
    console.log(antman.bio());
})();
export {};
//# sourceMappingURL=basica.js.map