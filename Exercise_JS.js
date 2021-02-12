let age = 2021-1994;
let ww2 = 1945-1939;
let tesla = 807 * 76;
let secondsOfDay = 24 * 60 * 60;
let hungarians = (9773000/7700000000) * 100;
let bigger = 9597000/78866;
let participants = 654 % 7;
let names = ["Anna","Petr","Eva","Jakub","Monika"];
let bool = names[2].length > 5;
let pocetClenu = names.length > 4;
let mujPrvniObjekt = {
    colors: ["yellow","black","blue"]
};

names.push("Věra");
names[0] = "Štěpán";
mujPrvniObjekt.hasManyColors = mujPrvniObjekt.colors.length > 3;

console.log("Mé jméno je Štěpán")
console.log(mujPrvniObjekt);
console.log("Je mi: " + age + " let");
console.log("Druhá svtová válka trvala: " + ww2 + " let");
console.log("76 akcií Tesla stojí: " + tesla + " dolarů");
console.log("Den má: " + secondsOfDay + " sekund");
console.log("Maďarsko tvoří: " + hungarians + " % světové populace");
console.log("Čína je : " + bigger + "x větší jako Česká Republika");
console.log("V nejmenší skupině budou : " + participants + " lidi");
console.log("Má třetí člen víc než 5 znaků? " + bool);
console.log("Má řetězec více než 4 členy? " + pocetClenu);

