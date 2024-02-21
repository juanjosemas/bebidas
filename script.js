document.addEventListener("DOMContentLoaded", function() {
    const bebidasLista = document.getElementById("bebidas-lista");
    const resetearBtn = document.getElementById("resetear-btn");
    const modal = document.getElementById("modal");
    const bebidaInput = document.getElementById("bebida-input");
    const confirmarBtn = document.getElementById("confirmar-btn");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Agregamos el evento de clic al botón "Reset"
    resetearBtn.addEventListener("click", function() {
        bebidasLista.innerHTML = ""; // Elimina todos los elementos de la lista de bebidas
    });

    confirmarBtn.addEventListener("click", function() {
        const bebidaNombre = bebidaInput.value.trim();
        if (bebidaNombre) {
            const li = document.createElement("li");
            const bebidaSpan = document.createElement("span");
            const btnDelete = document.createElement("button");
            const btnSumar = document.createElement("button");
            const btnRestar = document.createElement("button");
            const quantitySpan = document.createElement("span");

            bebidaSpan.textContent = bebidaNombre;
            quantitySpan.textContent = "Cant: 0";

            btnDelete.textContent = "X";
            btnSumar.textContent = "+";
            btnRestar.textContent = "-";

            btnDelete.classList.add("btn-delete");
            btnSumar.classList.add("btn-sumar");
            btnRestar.classList.add("btn-restar");

            btnDelete.addEventListener("click", function() {
                li.remove();
            });

            btnSumar.addEventListener("click", function() {
                let cantidad = parseInt(quantitySpan.textContent.split(": ")[1]) || 0;
                cantidad++;
                quantitySpan.textContent = "Cant: " + cantidad;
            });

            btnRestar.addEventListener("click", function() {
                let cantidad = parseInt(quantitySpan.textContent.split(": ")[1]) || 0;
                if (cantidad > 0) {
                    cantidad--;
                    quantitySpan.textContent = "Cant: " + cantidad;
                }
            });

            li.appendChild(btnDelete);
            li.appendChild(bebidaSpan);
            li.appendChild(btnSumar);
            li.appendChild(btnRestar);
            li.appendChild(quantitySpan);

            li.classList.add("bebida-container");

            bebidasLista.appendChild(li);
            bebidaInput.value = "";
            modal.style.display = "none";
        }
    });

    // Resto del código...
});
