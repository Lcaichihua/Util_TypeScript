class Persona{

    nombre :string ;
    apellido :string ;
    edad : number;
    constructor(nombre:string ,apellido:string ,edad:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;

    }   


    saludar():void{

        console.log("Hola  mi nombre es "+this.nombre +
        ' '+this.apellido);
        console.log(`Hola min nombre es  ${this.nombre} y mi apellido es 
         ${this.apellido}`);
    }
}

class Trabajador extends Persona {



}




var estudiante: Persona = new Persona("Larry","Caichihua",26);
estudiante.saludar();
var trabajador: Trabajador= new Trabajador("Jordy","Vergara",26);
trabajador.saludar();

/* en consola 

Larry@Larry-PC MINGW64 /d/Repositorios/Clase TypeScript
(master)

$ tsc clases.ts  -- compila el tyScript
$ node clases.js -- compila javascript
Hola  mi nombre es larry Caichihua



Larry@Larry-PC MINGW64 /d/Repositorios/Clase TypeScript
(master)
$ node clases.js
Hola  mi nombre es Larry Caichihua
Hola min nombre es  Larry y mi apellido es
         Caichihua
Hola  mi nombre es Jordy Vergara
Hola min nombre es  Jordy y mi apellido es
         Vergara



*/ 
