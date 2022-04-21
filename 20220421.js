let diakok = [
    {
    nev:"Zsófi",
    kor:17,
    osztaly:"12C",
},
{
    nev:"Karcsika",
    kor:16,
    osztaly:"12A",
},
{
    nev:"Lajos",
    kor:18,
    osztaly:"13C",
},
];

const ide = document.getElementById("ide");
const btn1 = document.getElementById("btnkilistaz");

btn1.addEventListener("click", kiir)
function kiir(){
    let ki = document.getElementById("ki");
    ki.innerHTML = `<table><td>Név</td><td>Kor</td><td>Osztály</td></table>`
    let tablazat = document.createElement("table");
    for(let i=0; i<diakok.length; i++){
        let adat = diakok[i];

        let sor = document.createElement("tr");
        let cella = document.createElement("td");
        cella.innerHTML=adat.nev;
        sor.appendChild(cella);
        cella = document.createElement("td");
        cella.innerHTML = adat.kor;
        sor.appendChild(cella);
        cella = document.createElement("td");
        cella.innerHTML = adat.osztaly;
        sor.appendChild(cella);
        tablazat.appendChild(sor);

    }
    ki.appendChild(tablazat);
};
let btn2 = document.getElementById("btnbekuld");
btn2.addEventListener("click", bekuld);

function Diak(nev, kor, osztaly){
    this.nev = nev;
    this.kor = kor;
    this.osztaly = osztaly;
};

function bekuld(){
    let nev = document.getElementById("floatingName").value;
    let kor = document.getElementById("floatingAge").value;
    let osztaly = document.getElementById("floatingClass").value;

    let diak = new Diak(nev, kor, osztaly);
    diakok.push(diak);
    kiir();

};
