var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Objetos
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
});
define("ES6/desestructuracion", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var avengers = {
            nick: 'Samuel',
            ironman: 'Tony',
            vision: 'Vision',
            activo: true,
            poder: 1500.123123
        };
        var printAvenger = function (_a) {
            var ironman = _a.ironman, resto = __rest(_a, ["ironman"]);
            console.log(ironman, resto);
        };
        var avengersArr = ['Cap. America', true, 150.15];
        var capitan = avengersArr[0], ironman = avengersArr[1], seriaUnNumero = avengersArr[2];
        // console.log({ ironman, capitan });
    })();
});
define("ES6/for-of", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var ironman = {
            name: 'Ironman',
            weapon: 'Armorsuit',
        };
        var captainAmerica = {
            name: 'Capitán América',
            weapon: 'Escudo',
        };
        var thor = {
            name: 'Thor',
            weapon: 'Mjolnir',
        };
        var avengers = [ironman, captainAmerica, thor];
        for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
            var avenger = avengers_1[_i];
            console.log(avenger.name, avenger.weapon);
        }
    })();
});
define("ES6/let-var", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        console.log('let');
        // console.log(a);
        var nombre = 'Tobías';
        var getName = function () {
            console.log('viejo getName');
        };
        // getName = () => { console.log('Nuevo getName') }
        // getName()
    });
});
define("funciones/args-default", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var fullName = function (firstName, lastName, upper) {
            if (upper === void 0) { upper = false; }
            if (upper) {
                return "".concat(firstName, " ").concat(lastName || '------').toUpperCase();
            }
            return "".concat(firstName, " ").concat(lastName || '------');
        };
        var name = fullName('Tony', 'Stark', true);
        console.log({ name: name });
    })();
});
define("funciones/args-optional", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var fullName = function (firstName, lastName) {
            return "".concat(firstName, " ").concat(lastName || '------');
        };
        var name = fullName('Tony');
        console.log({ name: name });
    })();
});
define("funciones/args-required", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var fullName = function (firstName, lastName) {
            return "".concat(firstName, " ").concat(lastName);
        };
        var name = fullName('Tony', 'Stark');
        console.log({ name: name });
    })();
});
define("funciones/args-rests", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var fullName = function (firstName) {
            var restArgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                restArgs[_i - 1] = arguments[_i];
            }
            return "".concat(firstName, " ").concat(restArgs.join(' '));
        };
        var superman = fullName('Clark', 'Joseph', 'Kent');
        console.log(superman);
    })();
});
define("funciones/functions-types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var addNumbers = function (a, b) { return a + b; };
        var greet = function (name) { return "Hola ".concat(name); };
        var saveTheWorld = function () { return 'El mundo está salvado'; };
        var myFunction;
        //* myFunction = 10;
        //* console.log(myFunction);
        // myFunction = addNumbers
        // console.log(myFunction(1, 2));
        //? myFunction = greet
        //? console.log(myFunction("Tobías"));
        myFunction = saveTheWorld;
        console.log(myFunction());
    })();
});
define("funciones/functions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var hero = 'Flash';
        function returnName() {
            return hero;
        }
        var activateBatiSignal = function () {
            return 'Batiseñal activada!';
        };
        console.log(typeof activateBatiSignal);
        var heroName = returnName();
    })();
});
define("objetos/object", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var flash = {
            name: 'Barry Allen',
            age: 24,
            powers: ['Super velocidad', 'Viajar en el tiempo'],
        };
        var superman = {
            name: 'Clark Kent',
            age: 60,
            powers: ['Super velocidad', 'Viajar en el tiempo'],
        };
    })();
});
define("objetos/type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var flash = {
            name: 'Barry Allen',
            age: 24,
            powers: [1, 2],
        };
        var superman = {
            name: 'Clark Kent',
            age: 60,
            powers: [1],
            getName: function () {
                return this.name;
            },
        };
    })();
});
define("objetos/union-types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var myCustomVariable = 'Tobías';
        console.log(typeof myCustomVariable);
        myCustomVariable = 20;
        console.log(typeof myCustomVariable);
        myCustomVariable = {
            name: 'Bruce',
            age: 43,
            powers: [1],
        };
        console.log(typeof myCustomVariable);
    })();
});
define("tipos/any", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var avenger = 123;
        var exists;
        var power;
        avenger = 'Dr Strange';
        // console.log(avenger.charAt(0));
        console.log(avenger.charAt(0));
        avenger = 150.2324342;
        console.log(avenger.toFixed(2));
        console.log(exists);
        console.log(power);
    })();
});
define("tipos/arrays", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        // const numbers: (string|number|boolean)[] = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
        villians.forEach(function (v) { return console.log(v.toUpperCase()); });
    })();
});
define("tipos/booleans", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var isSuperman = true;
        var isBatman = false;
        isSuperman = (isBatman) ? true : false;
        console.log({ isSuperman: isSuperman });
    })();
});
define("tipos/enums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var AudioLevel;
        (function (AudioLevel) {
            AudioLevel[AudioLevel["min"] = 1] = "min";
            AudioLevel[AudioLevel["medium"] = 2] = "medium";
            AudioLevel[AudioLevel["max"] = 10] = "max";
        })(AudioLevel || (AudioLevel = {}));
        var currentAudio = AudioLevel.max;
        console.log(currentAudio);
        console.log(AudioLevel);
    })();
});
define("tipos/never", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var error = function (message) {
            if (false) {
                throw new Error(message);
            }
            return 1;
        };
        error('Auxilio!');
    })();
});
define("tipos/null-undefined", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        // strictNullChecks
        // let isActive: boolean = null;
        // console.log(isActive);
    })();
});
define("tipos/numbers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var avengers = 10;
        console.log(avengers);
        var villians = 20;
        if (avengers < villians) {
            console.log('Estamos en problemas');
        }
        else {
            console.log('Nos salvamos');
        }
        avengers = Number('55A');
        console.log({ avengers: avengers });
    })();
});
define("tipos/strings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var _a;
        var batman = 'Batman';
        var linternaVerde = "Linterna's Verde";
        var volcanNegro = "H\u00E9roe: Volcan Negro";
        console.log("I'm ".concat(batman));
        console.log(batman.toUpperCase());
        console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
    })();
});
define("tipos/tuples", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        var hero = ['Dr Strange', 100, true];
        hero[0] = 'Ironman';
        hero[1] = 50;
        hero[2] = false;
        console.log(hero);
    })();
});
define("tipos/void", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        function callBatman() {
            return;
        }
        var callSuperman = function () {
            return;
        };
        var a = callBatman();
        console.log(a);
    })();
});
//# sourceMappingURL=main.js.map