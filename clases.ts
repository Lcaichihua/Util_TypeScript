class Persona{

    nombre :string ;
    apellido :string ;
    edad : number;
    saludar():void{

        console.log("Hola  mi nombre es "+this.nombre +
        ' '+this.apellido);
    }
}
var estudiante: Persona = new Persona();

estudiante.nombre="larry";
estudiante.apellido="Caichihua";
estudiante.saludar();

/* en consola 

Larry@Larry-PC MINGW64 /d/Repositorios/Clase TypeScript
(master)

$ tsc clases.ts  -- compila el tyScript
$ node clases.js -- compila javascript
Hola  mi nombre es larry Caichihua

*/ 
