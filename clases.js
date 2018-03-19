var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.saludar = function () {
        console.log("Hola  mi nombre es " + this.nombre +
            ' ' + this.apellido);
    };
    return Persona;
}());
var estudiante = new Persona();
estudiante.nombre = "larry";
estudiante.apellido = "Caichihua";
estudiante.saludar();
