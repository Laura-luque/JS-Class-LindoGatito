/**
 * 
 * @author Laura Luque
 * @date 28/03/2024
 */

{
    document.addEventListener("DOMContentLoaded", function () {
        const peso = document.getElementById("peso");
        let jugar = document.getElementById("jugar");
        let comer = document.getElementById("comer");
        checkEstado(`<img src="./img/inicio-cat.gif" alt="Imagen gato">`);
        
        jugar.addEventListener
            ("click", function() {
                window.gato.juega();
                peso.innerHTML = "Peso: " + gato.peso;
                
                checkEstado(gato.peso <= 3 ? `<img src="./img/cat-tired.gif" alt="Imagen gato">` : `<img src="./img/dancing-cat.gif" alt="Imagen gato">`);
            });

        comer.addEventListener("click", function() {
            window.gato.come();
            peso.innerHTML = "Peso: " + gato.peso;

            checkEstado(gato.peso >= 12 ? `<img src="./img/cat-fat.gif" alt="Imagen gato">` : `<img src="./img/comiendo.gif" alt="Imagen gato">`);
        });

        function checkEstado(imagen) {
            if (!gato.estado) {
                let infoMuerte = document.createElement('p');
                document.getElementsByName("img")[0].innerHTML = `<img src="./img/cat-dead.gif" alt="Imagen gato">`;

                infoMuerte.appendChild(document.createTextNode('El gato ha muerto.'));
                document.getElementsByTagName('body')[0].appendChild(infoMuerte);
                jugar.disabled = true;
                comer.disabled = true;
            } else {
                document.getElementsByName("img")[0].innerHTML = imagen;
            }
        }
    });
}


    
