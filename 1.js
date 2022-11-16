const menu = ["pipoca", 'macarrao', 'carne', 'feijao', 'brigadeiro'];
const tP = 10
const tM = 8
const tC = 15
const tF = 12
const tB = 8

function micro(prato, tempo) {
    if (prato === "pipoca" && tempo < tP || prato === "macarrao" && tempo < tM || prato === "brigadeiro" && tempo < tB || prato === "carne" && tempo < tC || prato === "feijao" && tempo < tF) {
        console.log("tempo insuficiente");
    } else
        preparo(prato, tempo);

}
function preparo(p, t) {
    if (p === "pipoca" && t == tP || p === "carne" && t == tC || p === "macarrao" && t == tM || p === "brigadeiro" && t == tB || p === "feijao" && t == tF) {
        console.log(`Prato pronta, bom apetite`)
    } else 
        deuRuim(p, t); 
}

function deuRuim(p1, t1) {
    if (p1 == "pipoca" && t1 == tP * 2) {
        console.log(`A comida queimou. Prato pronto, bom apetite!!`)
    } else if (p1 == "pipoca" && t1 >= tP * 3) {
        console.log("Kabummm, Prato pronto, bom apetite!!");
    } else if (p1 == "carne" && t1 == tC * 2) {
        console.log(`A comida queimou. Prato pronto, bom apetite!!`)
    } else if (p1 == "carne" && t1 >= tC * 3) {
        console.log("Kabummm, Prato pronto, bom apetite!!");
    } else if (p1 == "macarrao" && t1 == tM * 2) {
        console.log(`A comida queimou. Prato pronto, bom apetite!!`)
    } else if (p1 == "macarrao" && t1 >= tM * 3) {
        console.log("Kabummm, Prato pronto, bom apetite!!");
    } else if (p1 == "feijao" && t1 == tF * 2) {
        console.log(`A comida queimou. Prato pronto, bom apetite!!`)
    } else if (p1 == "feijao" && t1 >= tF * 3) {
        console.log("Kabummm, Prato pronto, bom apetite!!");
    } else if (p1 == "brigadeiro" && t1 == tB * 2) {
        console.log(`A comida queimou. Prato pronto, bom apetite!!`)
    } else if (p1 == "brigadeiro" && t1 >= tB * 3) {
        console.log("Kabummm, Prato pronto, bom apetite!!");
    }
    else
        console.log("Passou da conta meu patrão, Prato pronto, bom apetite!!!");

}

micro("pipoca", 15);
