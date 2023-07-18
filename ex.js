

// Calulatrice sur Navigateur

for(let i = 1; i > 0; i++)
{
    var choix = Number(prompt(" Que souhaitez-vous faire ?\n 1- Addition\n 2-Multiplication\n 3-Soustraction\n 4-Division"));
    var réponse;
    try{
        switch(choix)
        {
            case 1 : 
                Additionner(); 
                break;
            case 2 : 
                Soustraire(); 
                break;
            case 3 : 
                Multiplier(); 
                break;
            case 4 : 
                Diviser(); 
                break; 
            default: 
                throw new Error("Le choix fait n'est pas existant, veuillez faire un choix existant SVP !")
        }
    }


    catch(error){
        alert(error);
    }


    function Additionner(){
        var premierNb = Number(prompt("Quel est le premier nombre à additionner"));
        var deuxièmeNb = Number(prompt("Quel est le deuxième nombre à additionner"));

         réponse = premierNb + deuxièmeNb;
         alert(réponse);
    }

    function Soustraire(){
        var premierNb = Number(prompt("Quel est le premier nombre à additionner"));
        var deuxièmeNb = Number(prompt("Quel est le deuxième nombre à additionner"));

         réponse = premierNb - deuxièmeNb;
         alert(réponse);
    }

    function Multiplier(){
        var premierNb = Number(prompt("Quel est le premier nombre à multiplier"));
        var deuxièmeNb = Number(prompt("Quel est le deuxième nombre à multiplier"));

         réponse = premierNb * deuxièmeNb;
         alert(réponse);
    }

    function Diviser(){
        var premierNb = Number(prompt("Quel est la dividende"));
        var deuxièmeNb = Number(prompt("Quel est le diviseur"));

         réponse = premierNb * deuxièmeNb;
         alert(réponse);
    }
}
