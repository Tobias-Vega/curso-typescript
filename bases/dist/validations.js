var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
    console.log(Validations.validateText('Tobías'));
})(Validations || (Validations = {}));
export {};
//# sourceMappingURL=validations.js.map