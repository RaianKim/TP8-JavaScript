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