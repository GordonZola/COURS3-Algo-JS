/*
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
*/


//Exercice 24

var number = prompt("Entrez un chiffre");
var table = new Array(1 ,2, 3, 4, 5, 6, 7, 8, 9, 10);
var count = 0;
var grand = "";

for (var position = 0; position < table.length; index++)
  