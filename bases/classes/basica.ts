(() => {
  class Avenger {
    // private name: string = 'Scott Lang';
    // private team: string;
    // public realName?: string | undefined;
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');

  console.log(antman);
  console.log(Avenger.avgAge);

})()