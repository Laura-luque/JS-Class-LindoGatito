/**
 * 
 * @author Laura Luque
 * @date 28/03/2024
 */

    class Lindogatito 
    {
        #nombre;
        #fecha;
        #edad;
        #raza;
        #peso;
        #estado = true;

        static #PESO_MAXIMO = 15;
        static #PESO_MINIMO = 1;

        constructor ({nombre = "Michi", fecha="01-16-2023", raza="Persa", peso=7}) 
        {
            try {
                this.#nombre = nombre;
                this.#fecha = fecha;
                this.#raza = raza;
                this.#edad = this.calcularEdad(this.#fecha);
                if (Lindogatito.#PESO_MINIMO < peso) {
                    this.peso = peso;                
                }
                else {
                    this.#estado = false;
                    throw new Error("Peso no válido.");
                }
            } catch (error) {
                console.error(error);
            }
        }
        
        set nombre(value) 
        {
            this.#nombre= value;
        }
        
        get nombre() 
        {
            return this.#nombre;
        }

        set fecha(value) 
        {
            this.#fecha= value;
        }
        
        get fecha() 
        {
            return this.#fecha;
        }
        
        set raza(value) 
        {
            this.#raza= value;
        }
        
        get raza() 
        {
            return this.#raza;
        }

        set peso(value) 
        {
            this.#peso = value;
        }
        
        get peso()
        {
            return this.#peso;
        }

        get estado()
        {
            return this.#estado;
        }
    
        set estado(estado)
        {
            this.#estado = estado;
        }


        #setPeso(peso) {
            if (this.estado && (Lindogatito.#PESO_MINIMO < peso && peso < Lindogatito.#PESO_MAXIMO)) {
                this.peso = peso;
            } else {
                this.peso = peso;
                this.estado = false;
            }
        }

        juega() 
        {
            if (this.peso < 1) {
                this.estado = false;
            } else {
                this.#setPeso(this.peso - 1);
            }
        }

        come()
        {
            if (this.peso > 15) {
                this.estado = false;
            } else if (this.peso <= 0) {
                this.estado = false;
            } else {
                this.#setPeso(this.peso + 1);
            }   
        }

        calcularEdad(fechaNacimiento) {
            let edad = (new Date()- new Date(fechaNacimiento)) / (365.25 * 24 * 60 * 60 * 1000);
        
            return Math.floor(edad);
        }

    } 

{
    document.addEventListener("DOMContentLoaded", function() {
        const newCat = document.getElementById('newCat');
        const keys = Array("nombre","fecha","raza","peso");

        newCat.addEventListener("click", function(){
            const nombre = document.getElementById("name").value;
            const fecha = document.getElementById("date").value;
            const peso = document.getElementById("peso").value;
            const raza = document.getElementById("race").value;

            const preValue = Array(nombre, fecha, raza, peso);

            const ventanaNueva = window.open("","", "width=800,height=900");
            ventanaNueva.gato = new Lindogatito(crearObjeto(keys, preValue));
            ventanaNueva.document.write(`
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="author" content="Laura Luque Bravo">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Nueva Ventana</title>
                    <script src="script_cat2.js"></script>
                </head>
                <body>
                    <span name="img"></span>
                    <p>Nombre: ${ventanaNueva.gato.nombre}</p>
                    <p>Edad: ${ventanaNueva.gato.calcularEdad(ventanaNueva.gato.fecha)}</p>
                    <p id='peso'>Peso: ${ventanaNueva.gato.peso}</p>
                    <p>Raza: ${ventanaNueva.gato.raza}</p>

                    <button id='jugar'>Jugar</button>
                    <button id='comer'>Comer</button>
                </body>
            </html>
            `);
            ventanaNueva.document.close();
        })
    });

    function crearObjeto(keys, values) {
        const object = {};
    
        keys.forEach((key, index) => {
            const value = values[index];
            if (value !== "") object[key] = value;
        });
        return object
    }
}
