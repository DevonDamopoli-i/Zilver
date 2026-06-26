function toonPassagiers(array) {
console.log(`\n--- Passagierslijst (${array.length} personen) ---`);
 for (let i = 0; i < array.length; i++) {
 console.log(`${i + 1}. ${array[i]}`);
}
}

let bus = [
"Emma de Vries",
"Liam Janssen",
"Sophie Bakker",
"Noah van Dijk",
"Olivia Meijer",
"Lucas Smit",
"Ava Peters",
"Finn Visser",
 "Mia de Boer",
 "Sam Mulder"
];
toonPassagiers(bus);
bus.push("Julia Klaassen");
console.log("\nNieuwe passagier ingestapt: Julia Klaassen");
toonPassagiers(bus);

const uitgestapt = bus.splice(4, 1);
console.log(`\n${uitgestapt[0]} (5e persoon) is uitgestapt.`);
toonPassagiers(bus);

function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}
bus = shuffle(bus);
console.log("\nBarrel roll! Iedereen zit op een andere plek.");
toonPassagiers(bus);

console.log("\n--- Eindhalte bereikt ---");
while (bus.length > 0) {
const uitstapper = bus.pop();
console.log(`${uitstapper} stapt uit. Nog ${bus.length} passagier(s) in de bus.`);
}
console.log("De bus is leeg!");