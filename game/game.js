let game =  document.getElementById("aire_de_jeux")

class Paire {
    constructor(num1, num2, id) {
        this.tabPair = [num1, num2]; 
        this.identifiant = id;      
    }

    allPair() {
        return this.tabPair; 
    }

    id() {
        return this.identifiant; 
    }

    verif(value) {
        return this.tabPair.includes(value);
    }
}


function creation_tab_game(nbr_case) {
    let tab_game = [];
    for (let i = 1; i < nbr_case + 1; i++) {
        tab_game.push(i)
    }
    return tab_game
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tableau = creation_tab_game(12)

for (let i = 0; i < 6; i++) {
    let first_index = rand(0, tableau.length - 1)
    let value1 = tableau[first_index]
    tableau.splice(first_index, 1)


    let second_index = rand(0, tableau.length - 1)
    let value2 = tableau[second_index]
    tableau.splice(second_index, 1)

    let paire = new Paire(value1, value2, i)

    console.log(tableau)
    console.log("valeur 1 : " + value1)
    console.log("valeur 2 :" + value2)
    console.log("taille du tableau:" + tableau.length)
    console.log(paire.allPair())
    console.log(paire.id())
    


}

for(let i =1 ; i<13; i++){
    let button = document.createElement("button")
    button.id = i
    game.appendChild(button)
    button.addEventListener("click",()=>{
        console.log(i)
        
    })
}