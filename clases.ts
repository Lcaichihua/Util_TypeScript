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
    }
}
var estudiante: Persona = new Persona("Larry","Caichihua",26);
estudiante.saludar();

/* en consola 

Larry@Larry-PC MINGW64 /d/Repositorios/Clase TypeScript
(master)

$ tsc clases.ts  -- compila el tyScript
$ node clases.js -- compila javascript
Hola  mi nombre es larry Caichihua

*/ 
