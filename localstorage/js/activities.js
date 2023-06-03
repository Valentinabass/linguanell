/* First Exercice*/
window.addEventListener("load", () => {
    const search = new URL(document.location).searchParams;
    const r1 = search.get("r1");
    const r2 = search.get("r2");
    const r3 = search.get("r3");
    const r4 = search.get("r4");
    const r5 = search.get("r5");
    const r6 = search.get("r6");
    const r7= search.get("r7");
    const r8 = search.get("r8");
    const r9 = search.get("r9");
    const r10 = search.get("r10");
    document.getElementById("tr1").innerHTML = r1;
    document.getElementById("tr2").innerHTML = r2;
    document.getElementById("tr3").innerHTML = r3;
    document.getElementById("tr4").innerHTML = r4;
    document.getElementById("tr5").innerHTML = r5;
    document.getElementById("tr6").innerHTML = r6;
    document.getElementById("tr7").innerHTML = r7;
    document.getElementById("tr8").innerHTML = r8;
    document.getElementById("tr9").innerHTML = r9;
    document.getElementById("tr10").innerHTML = r10;
    
                        });
   /* Second Exercice*/
const quizz = [
{
    pregunta: "Cuando nos referimos a un sustantivo masculino junto con un femenino, debemos usar un pronombre masculino para referirnis a ambos, p. ej, EL y ELLA puede ser reemplazado por ELLOS. (V / F)",
    respuesta: "V",

}, 
{
    pregunta: "No podemos omitir el pronombre personal en una oración sin afectar su significado p. ej. ELLA ES LINDA puede ser reemplazado por ES LINDA (V / F) ",
    respuesta: "F"
},

];

const view = {
    score: document.querySelector("#score strong"),
    question: document.getElementById("question"),
    result: document.getElementById("result"),
    info: document.getElementById(info),
    response:  document.querySelector("#response"),
    start: document.getElementById("start"),
    setup () {
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score, game.score);
        this.render(this.result, "");
        this.resetForm();
    },
}   

