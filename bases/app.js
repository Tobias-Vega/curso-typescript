(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let PowerHeroes;
    (function (PowerHeroes) {
        PowerHeroes[PowerHeroes["acuaman"] = 0] = "acuaman";
        PowerHeroes[PowerHeroes["batman"] = 1] = "batman";
        PowerHeroes[PowerHeroes["flash"] = 5] = "flash";
        PowerHeroes[PowerHeroes["superman"] = 100] = "superman";
    })(PowerHeroes || (PowerHeroes = {}));
    const fuerzaFlash = PowerHeroes.flash;
    const fuerzaSuperman = PowerHeroes.superman;
    const fuerzaBatman = PowerHeroes.flash;
    const fuerzaAcuaman = PowerHeroes.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
export {};
