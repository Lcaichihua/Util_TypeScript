// string
var nombre : string = "Larry";
// number
var edad : number = 26;
//boolean 
var casado :boolean =true;

//Array
var amigos :Array<string> =['larry','jordy','davy'];
var hermanos :string[] = ['larry','jordy','davy'];
//Enums
enum Parentesco {Padre,hermano,hermana};
var parentesco : Parentesco =Parentesco.Padre;
// Any

var miVariable : any ;
miVariable =10;
miVariable = 'test';
miVariable = [1,2,3,4];
//void   => no espera ninguna variable 

function conVoid(informacion :string):void {
//mi codigo

}
// return 
function conReturn(informacion :string) :string{

    return "si retorna algo :D";
}
