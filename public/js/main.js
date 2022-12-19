let phrase = "Bonjour tout le monde     "

console.log(phrase.length); 


phrase = phrase.trimEnd(); 


console.log(phrase.length); 


console.log(phrase.substr(-1)); 


phrase = phrase.replace("Bonjour", ""); 

console.log(phrase);

console.log(phrase.slice(33));

phrase = "Bonjour " + phrase; 

console.log(phrase);
phrase = "Bonjour"; 
console.log(phrase);

phrase = phrase.replace("Bonjour", "string");

console.log(Math.random()); 
phrase = "Bonjour " + phrase; 

phrase = phrase.charAt(0).toLowerCase() +phrase.charAt(1).toLowerCase() 
+ phrase.charAt(2).toLowerCase() + phrase.charAt(3).toLowerCase() +phrase.charAt(4).toUpperCase() + phrase.charAt(5).toLowerCase() +phrase.charAt(6).toUpperCase();
console.log(phrase);

let index = phrase.indexOf("o", phrase.indexOf("o") + 1);


let nom = "votre nom" 

nom = nom.replace(nom.charAt(0), nom.charAt(0).toUpperCase());
nom = nom.replace(nom.charAt(8), nom.charAt(8).toUpperCase());

console.log(nom);


