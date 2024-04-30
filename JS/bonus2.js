
//richimao il bottone in JS

let bottone=document.getElementById("start-button");


//richiamo in JS la griglia 
let griglia = document.getElementById("griglia");

//creo un ciclo nel quale creo i quadrati della griglia 
for (let i = 1; i <= 100; i++) {
    /*creo la variabile quadrato con all'interno il div 
    (specificare prima il document, così crei un elemento etereo nella pagina
    che potrà poi essere implementato)
    */
    let quadrato = document.createElement("div");

    //aggiungo la classe quadrato che dà le dimensioni
    quadrato.classList.add("quadrato")

    /*aggiungo il numero del quadrato come testo dentro al div,
    ossia il numero del ciclo*/
     quadrato.innerText = i;
    

    /*dico al quadrato di agire quando viene cliccato, ovvero 
    gli dico di cambiare colore e fare console.log */
    quadrato.addEventListener("click", function () {
        // cambio colore
        quadrato.classList.toggle("azzurro")
        //scrivo in console il valore del quadrato con il valore attuale
        console.log(i)
    })
    //inserisco il div appena creato nella griglia
    bottone.addEventListener("click",function(){
        griglia.append(quadrato);  
    })
    }



