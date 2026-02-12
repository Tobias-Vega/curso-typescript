(() => {

  const addNumbers = (a: number, b: number) => a + b;

  const greet = (name: string) => `Hola ${name}`;

  const saveTheWorld = () => 'El mundo está salvado';

  let myFunction: () => string;


  //* myFunction = 10;
  //* console.log(myFunction);

  // myFunction = addNumbers
  // console.log(myFunction(1, 2));

  //? myFunction = greet
  //? console.log(myFunction("Tobías"));

  myFunction = saveTheWorld
  console.log(myFunction());


})();