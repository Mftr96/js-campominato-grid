
function f_quadrato(i) {
    let quadrato = document.createElement("div");

    quadrato.classList.add("quadrato")


    quadrato.addEventListener("click", function () {

        quadrato.classList.toggle("azzurro")

        console.log(i);
        quadrato.innerText = i;

        

    });

    return quadrato;
}


let griglia = document.getElementById("griglia");

for (let i = 1; i <= 100; i++) {
    let quadrato=f_quadrato(i);

    griglia.append(quadrato);

    }
