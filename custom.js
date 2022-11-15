/*
// EXERCICE 1 //

var stringName="Yoann"; //Définition de la variable contenant le nom//
var intAge=30;
var bool=true;
                
alert(`le nom est ${stringName} l'age est ${intAge} le booléen est ${bool}`);


// EXERCICE 2 // 

var stringName = prompt("Entrez votre prénom");
alert(`votre nom est ${stringName}`);



// EXERCICE 3 // 

var stringName = prompt("Entrez votre prénom");
var intAge = prompt("Entrez votre age");
alert("Ton nom est " + stringName + " et tu as " + intAge + "ans");



// EXERCICE 4 //

var intAge = prompt("Saisir votre age");

if (intAge>50)
{
    alert("Tu es vieux !");
}
else
{
    alert("Tu es jeune !");
}

// alert(intAge>50? 'Tu es vieux' : 'Tu es jeune');



// EXERCICE 5 //

var intNbre = prompt("Saisir un nombre");
if (intNbre>=0)
{
    alert("Positif !");
}
else
{
    alert("Négatif !");
}

// EXERCICE 6 //

var intNbre = prompt("Saisir un nombre");
if (intNbre>0)
{
    alert("Positif !");
}
else (intNbre<0)
{
    alert("Négatif !");
}
else if
{
    alert("Chiffre nul");
}

// EXERCICE 7 //

var intA = prompt("saisir un premier nombre");
var intB = prompt("saisir un second nombre");
var stringope = prompt("choisir un opérateur entre + - * ou /")

if (stringope == "+")
{
    alert(`Addition : ${intA} + ${intB} = ${Number(intA) + Number(intB)}`);
}
else if (stringope == "-")
{
    alert(`Addition : ${intA} - ${intB} = ${Number(intA) - Number(intB)}`);
}
else if (stringope == "*")
{
    alert(`Addition : ${intA} * ${intB} = ${Number(intA) * Number(intB)}`); 
}
else if
{
    alert(`Addition : ${intA} / ${intB} = ${Number(intA) / Number(intB)}`);
}
else
{
    alert('Opérateur non reconnu');
}


// EXERCICE 8 //

var intA = prompt("saisir un premier nombre");
var intB = prompt("saisir un second nombre");
var stringope = prompt("choisir un opérateur entre + - * ou /");

switch (stringope)
{
    case '+':
    alert(`Addition : ${intA} + ${intB} = ${Number(intA) + Number(intB)}`);
    break;

    case '-':
    alert(`Soustraction : ${intA} - ${intB} = ${Number(intA) - Number(intB)}`);
    break;

    case '*':
    alert(`Multiplication : ${intA} * ${intB} = ${Number(intA) * Number(intB)}`);
    break;

    case '/':
    alert(`Division : ${intA} / ${intB} = ${Number(intA) / Number(intB)}`);
    break;

    default:
    alert("Erreur, choisir un opérateur valide");
}


// EXERCICE 9 //

var intC=0;
do
{
    alert(intC);
    intC++;
}
while(intC<=3);


// EXERCICE 10 //

var intD=0;
while(intD<=9)
{
    alert(intD);
    intD++;
}


// EXERCICE 11 //

for (var intE=0;intE<=3;intE++)
{
    alert(intE);
}


// EXERCICE 12 , Do/While//

var intF = prompt("Saisir un chiffre");
var turn = 0;
do
{
    alert("boucle do/while " + turn);
    turn++;
}
while(turn <= intF);


// EXERCICE 12 , While//

var intG = prompt("Saisir un chiffre");
var turn = 0;

while(intG>=turn)
{
    alert("boucle while "+ turn);
    turn++;
}


// EXERCICE 12, For//

var intH=prompt("Saisir un chiffre");
for (turn=0; intH>=turn;turn++)
{
    alert("boucle for " + turn);
}


// EXERCICE 13//

function send()
{
    var intNumber = document.getElementById('number').value;
    alert("Ton nombre est " + intNumber);
}

// EXERCICE 14 //

function carre()
{ 
    var intCarre = document.getElementById('number2').value;
    alert("le carré de ton nombre est " + Number(intCarre) * Number(intCarre));
}

// EXERCICE 15 //

function formulaire()
{
    var stringName = document.getElementById('name').value;
    var stringFirstName = document.getElementById('firstName').value;
    var intAge = document.getElementById('age').value;

    if (intAge>50)
    {
        var stringAge = "Tu es vieux !";
    }
    else
    {
        var stringAge = "Tu es jeune !";
    }

    alert("Ton nom est " + stringName + ", ton prénom est " + stringFirstName + " et " + stringAge);
}


//Exercice 16 Récuperer une valeur dans un tableau

var myTable = new Array ("Bonjour" , "Rebonjour" , "ReReBonjour");
alert(myTable[1]);


//Exercice 17 Parcourir tableau puis afficher la position lorsque la valeur est 9

var myTable = new Array( 3 , 5 , 9 , 11 , 19);
for (var index = 0;index < myTable.lenght; index++) 
{
    if(myTable[index] == 9)
    {
        alert(`Le chiffre 9 a été trouvé en position ${index}`);
    }
}

//Exercice 18 Tableau avec les jours de la semaine, parcourir puis afficher chaque jour avec un message diff

var myTable = new Array ("Lundi" , "Mardi" , "Mercredi" , "Jeudi" , "Vendredi" , "Samedi" , "Dimanche")

    myTable.forEach(Jours => 
    {
      switch (Jours)
      {
        case "Lundi":
        alert("Le Lundi c'est quand même bien mignon")
        break;

        case "Mardi":
        alert("Le Mardi c'est cool aussi")
        break;

        case "Mercredi":
        alert("Le Mercredi c'est tolérable")
        break;

        case "Jeudi":
        alert("Le Jeudi c'est naze")
        break;

        case "Vendredi":
        alert("Le Vendredi tout est permis")
        break;

        case "Samedi":
        alert("Le Samedi c'est l'ennui")
        break;

        case "Dimanche":
        alert("Le Dimanche c'est détente")
        break;
        }      
    });


//Exercice 19

//Demander la taille du tableau//
var Size = prompt("Donnez la taille du tableau")

//Création du tableau
var myTable = new Array(Number(Size));

//Demander les valeurs
for (let index = 0; index < myTable.length; index++)
{
    myTable[index] = prompt(`Donnez la valeur ${index} du tableau`)
}
for (let index = 0; index < myTable.length; index++)
{
    alert(`Ligne : ${index} | Valeur : ${myTable[index]}`)
};


//Exercice 20

var table = new Array(1, 3, 5);
var flag = false;

for (var index = 0; index < table.length;index++)
{
    if(table[index] == 5) {
        flag=true;
    }
}
if (flag) {
    alert("gg!");
} else {
    alert("Je n'ai pas trouvé")
}


//Exercice 21

var size = prompt("Donnez la taille du tableau");
var table = new Array(Number(size));

    for (let index = 0; index < table.length; index++)
        {
            table[index] = prompt(`Donnez la valeur ${index} du tableau`)
        };
    for (let index = 0; index < table.length; index++)
        {
            alert(`Ligne : ${index} | Valeur : ${table[index]}`)
        };
var intMax = Number(table[0]);
    for (var index=0; index < table.length; index++)
        {
            if(table[index] > Number(intMax))
            {
                intMax = table[index];
            }
        };
alert(`La valeur la plus grande du tableau est ${intMax}`);



//Exercice 22

var size = prompt("Donnez la taille du tableau");
var table = new Array(Number(size));

    for (let index = 0; index < table.length; index++) {
            table[index] = prompt(`Donnez la valeur ${index} du tableau`);
        };

    for (let index = 0; index < table.length; index++) {
            alert(`Ligne : ${index} | Valeur : ${table[index]}`);
        };

var intMin = Number(table[0]);
var intMax = Number(table[0]);

    for (var index=0; index < table.length; index++) {
            if (table[index] > Number(intMax)) {
                intMax = table[index];
            }

            if (table[index] < Number(intMin)) {
                intMin = table[index];
            }
        };

    alert(`La valeur la plus haute du tableau est ${intMax}`);
    alert(`La valeur la plus basse du tableau est ${intMin}`);



//Exercice 23

var number = prompt("Entrez un chiffre");
var table = new Array(1 ,2, 3, 4, 5, 6, 7, 8, 9, 10);
var count = 0;

for (var index = 0; index < table.length; index++) {
    if (table[index] > number) {
        count++;
    }
}
    
alert(`il y a ${count} chiffre(s) dans le tableau qui sont plus grands`);


//Exercice 24

var number = prompt("Entrez un chiffre");
var table = new Array(1 ,2, 3, 4, 5, 6, 7, 8, 9, 10);
var count = 0;
var grand = "";

for (var position = 0; position < table.length; index++)
*/






/*
var nombre1 = prompt('Entrez un nombre');
var nombre2 = prompt('Entrez un second nombre');
var operateur = prompt('Opérateur + - * /');
var result = 0;

switch(operateur){
    case '+' : 
        result = nombre1 + nombre2;
    break;

    case '-' : 
        result = nombre1 - nombre2;
    break;

    case '*' : 
        result = nombre1 * nombre2;
    break;
    
    case '/' : 
        result = nombre1 / nombre2;
    break;
}
alert(`Le restulat est ${result}`);



var iResult = 0; 

do{
    alert(`Cette page indique ${iResult}`)
    iResult++
} while (iResult <= 3);






var iNumber = 0;

while(iNumber <= 9){
    alert(`Cette page indique ${iNumber}`);
    iNumber++
}




var iDecompte = 0;
for (iDecompte; iDecompte<=4; iDecompte++) {
    alert (`Cette page indique ${iDecompte}`);
}






var aTable1 = [12, 50, 90]; 

alert(aTable1[1]);






var aTable = [1, 9, 12, 80, 120,70,76,666,899];

for (let i = 0; i <= aTable.length; i++) {
    if (i == 6){
        alert(`Afficher l'index ${i} pour la valeur ${aTable[i]}`)
    }
}

*/


/*

    Parcourir le tableau , 
    lorsque multiple de 3 afficher Multiple de 3 + index / valeur tableau + Flix
    Lors que multiple de 5 affichier Multiple de 5 + index / valeur tableau + Buzz
    Lors multiple de 3 et multiple de 5 en meme temps 
    -> Afficher index / valeur tableau + FlixBuzz
*/
/*

var aTable = [1, 9, 12, 15,30,70,90,100,75,33,76,666,899];

for (let i = 0; i <= aTable.length; i++) {

    if (aTable[i] % 3 == 0 && aTable[i] % 5 == 0) {
        alert(`Afficher multiple de 3 et de 5 pour l'index : ${i} et la valeur est ${aTable[i]} FLIXBUZZ`);
    }
    else if (aTable[i] % 3 == 0) {
        alert(`Afficher multiple de 3 pour l'index : ${i} et la valeur est ${aTable[i]} FLIX`);
    }
    else if (aTable[i] % 5 == 0) {
        alert(`Afficher multiple de 5 pour l'index : ${i} et la valeur est ${aTable[i]} BUZZ`);
    }
}
*/


var aTable = [54, 65,54, 64, 21, 64, 87, 21, 45, 52];

var iChiffre = prompt (`Donne un chiffre`);
var jCompte = 0
var sResult = ""

for (let i = 0; i <= aTable.length; i++) {


    if (aTable[i] > iChiffre){
        jCompte++;
        sResult += aTable[i] + ' | ' ;
    }

}
    alert (`Il y a ${jCompte} Les valeurs sont : ${sResult}`)































