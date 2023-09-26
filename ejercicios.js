/*EJERCICIO N°1*/
function CalculadoraEdad()
{
    /*    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();
    const fechaNacimiento = document.getElementById("fecha")
    fecNac = fechaNacimiento.value.toString().split("-")
    const añoNac = fecNac[0];
    const mesNac = fecNac[1];
    const diaNac = fecNac[2];
    let edad;
    if(mes == mesNac)
    {
        if(dia > diaNac)
        {
            edad = año - añoNac;
        }
        else
        {
            edad = año - añoNac - 1;
        }
    }
    else if (mes < mesNac)
    {
        edad = año - añoNac - 1;
    }
    else
    {
        edad = año - añoNac;
    }
    const nombreUsuario = document.getElementById("nombre")
    let resultado = document.getElementById("aniosUsuario");
    resultado.innerHTML = `Hola ${nombreUsuario.value}, tenes ${edad} años!`;*/ 
    let fechaNacimiento = prompt("ingresa tu fecha de nacimiento")
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();
    fechaNacimiento = fechaNacimiento.split('-')
    const añoNac = parseInt(fechaNacimiento[0]);
    const mesNac = parseInt(fechaNacimiento[1]);
    const diaNac = parseInt(fechaNacimiento[2]);
    let edad;
    if(mes == mesNac)
    {
        if(dia > diaNac)
        {
            edad = año - añoNac;
        }
        else
        {
            edad = año - añoNac - 1;
        }
    }
    else if (mes < mesNac)
    {
        edad = año - añoNac - 1;
    }
    else
    {
        edad = año - añoNac;
    }
    return edad;
}
console.log(CalculadoraEdad());
/*EJERCICIO N°2*/

function TirandoFruta()
{
    const frutaElegida = prompt("Que fruta se le ocurre ahora mismo"); 
    let frutas = ["manzana", "banana", "naranja", "uva", "mandarina", "kiwi", "sandia", "mango", "pera", "frutilla"];
    const fruta = frutas.find(frutita => frutita == frutaElegida);
    if(fruta != null)
    {
        console.log(`Sí, tenemos ${frutaElegida}!`);
    }
    else
    {
        console.log(`No, no tenemos ${frutaElegida}`);
    }

}
TirandoFruta();
/*EJERCICIO N°3*/
// A
console.log(10 == '10'); //true
//B
console.log(1 === '1' ); //false. Aunque tienen son el mismo numero, no son del mismo tipo, 1 en un tipo numero y '1' es un tipo string
//C
console.log(typeof 10.6); //number
//D
console.log(1 == true); //true, es como en sql, 0 hace referencia a false y 1 a true.
/*EJERCICIO N°4*/
function yoObjeto() 

{
    const Ciudad = 
    {
        ciudad : "CABA",
        fechaFundacion : '1580-06-11',
        poblacion : 3120612,
        extension : '200 Km²'
    }
    for(let propiedades in Ciudad)
    {
        console.log(`${propiedades} : ${Ciudad[propiedades]}`)
    }
}
yoObjeto();

/*EJERCICIO N°5*/
function dobleElementos(arraynumeros)
{
    let arrayNumerosNuevo = [];
    for(let numeros of arraynumeros)
    {
        arrayNumerosNuevo.push(numeros);
        arrayNumerosNuevo.push(numeros);
        console.log(numeros)
    }
    console.log(arrayNumerosNuevo);
}
dobleElementos([1,2,4]);

//si usamos 'for in', el arraynumeros se veria [0:1,1:2,2:4]
//Donde los primeros numeros antes de los : son la posicion. Por ende si ponemos console.log
//numeros, nos daria 0 , 1 y 2 
                                        //****//
//si usamos 'for of', el arraynuremos se veria [1,2,4]
//Por ende si ponemos console.log numeros, nos daria 1 , 2 y 4. Seria como un foreach de c#

/*EJERCICIO N°6*/
function trianguloDeArteriscos()
{
    const altura = 5;
    let arrayTriangulo1 = [];
    for(let index = 1; index < altura+1; index++)
    {
        arrayTriangulo1.push('*'.repeat(index));
    }
    for(let aste of arrayTriangulo1)
    {
        console.log(aste.toString());
    }
}
trianguloDeArteriscos();
function trianguloDeArteriscos2()
{
    const alturaTriangulo2 = 9;
    const aux = Math.round(alturaTriangulo2/(2))
    for (let i= 1; i <= aux; i++) {
        let linea;
        linea = '-'.repeat(aux-i);
        linea += '*'.repeat(alturaTriangulo2-(linea.length*2));
        linea += '-'.repeat(aux-i);
        console.log(linea);
    }
}
trianguloDeArteriscos2();
/*EJERCICIO N°7*/
function filterNamesWithA() {
    const namesInput = document.getElementById("namesInput").value;
    const namesArray = namesInput.split(",");
    const filteredNames = namesArray.filter(name => name.toLowerCase().startsWith('a'));
    document.getElementById("filteredNames").innerHTML = filteredNames;
}
/*EJERCICIO N°8*/
function replaceWords() {
    const textInput = document.getElementById("textInput").value;
    const wordToReplace = document.getElementById("wordToReplace").value;
    const replacementWord = document.getElementById("replacementWord").value;
    document.getElementById("replacedText").innerHTML = textInput.replace(wordToReplace,replacementWord);
}
/*EJERCICIO N°9*/
function cutText() {
    const textToCut = document.getElementById("textToCut").value;
    const charactersToKeep = document.getElementById("charactersToKeep").value;
    const cutResult = textToCut.slice(0, charactersToKeep);
    document.getElementById("cutResult").innerHTML = cutResult;
}
/*EJERCICIO N°10*/
function createStringWithSeparator() {
    const elementsInput = document.getElementById("elementsInput").value;
    const elementsArray = elementsInput.split(",");
    const stringWithSeparator = elementsArray.join(" - ");
    document.getElementById("stringWithSeparator").innerHTML = stringWithSeparator;
}
/*EJERCICIO N°11*/
function calculateTotalRevenue() {
    const ordersInput = document.getElementById("ordersInput").value;
    const ordersArray = ordersInput.split(",");
    let totalRevenue = 0;
    for (const order of ordersArray) {
        const [name, total] = order.split(":");
        totalRevenue += parseFloat(total);
    }
    document.getElementById("totalRevenue").innerHTML = "Recaudación Total: $" + totalRevenue.toFixed(2);
}
