(() => {

  type Avengers = {
    activo: boolean,
    ironman: string,
    nombre: string,
    poder: number,
    nick: string,
    vision: string,
  }

  const avengers = {
    nick: 'Samuel',
    ironman: 'Tony',
    vision: 'Vision',
    activo: true,
    poder: 1500.123123
  }

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  }

  const avengersArr: [string, boolean, number] = ['Cap. America', true, 150.15];

  const [capitan, ironman, seriaUnNumero] = avengersArr;
  // console.log({ ironman, capitan });
})()