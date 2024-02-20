document.addEventListener("DOMContentLoaded", function() {
    const bebidasLista = document.getElementById("bebidas-lista");
    const agregarBtn = document.getElementById("agregar-btn");
    const resetearBtn = document.getElementById("resetear-btn");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const confirmarBtn = document.getElementById("confirmar-btn");
    const bebidaInput = document.getElementById("bebida-input");

    agregarBtn.addEventListener("click", function() {
        modal.style.display = "block";
        bebidaInput.focus();
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    confirmarBtn.addEventListener("click", function() {
        const bebidaNombre = bebidaInput.value.trim();
        if (bebidaNombre !== "") {
            const li = document.createElement("li");
            const btnDelete = document.createElement("button");
            btnDelete.innerHTML = "<strong>X</strong>";
            btnDelete.classList.add("btn-delete");
            btnDelete.addEventListener("click", function() {
                if (confirm("¿Estás seguro de que deseas eliminar esta bebida?")) {
                    eliminarBebida(li);
                }
            });
            const bebidaSpan = document.createElement("span");
            bebidaSpan.textContent = bebidaNombre;
            li.appendChild(btnDelete);
            li.appendChild(bebidaSpan);
            const btnSumar = document.createElement("button");
            btnSumar.textContent = "+";
            btnSumar.addEventListener("click", function() {
                sumarCantidad(li);
            });
            const btnRestar = document.createElement("button");
            btnRestar.textContent = "-";
            btnRestar.addEventListener("click", function() {
                restarCantidad(li);
            });
            li.appendChild(btnSumar);
            li.appendChild(btnRestar);
            bebidasLista.appendChild(li);
            modal.style.display = "none";
            bebidaInput.value = "";
        }
    });

    resetearBtn.addEventListener("click", function() {
        bebidasLista.innerHTML = "";
    });

    function sumarCantidad(elemento) {
        const cantidadSpan = document.createElement("span");
        if (!elemento.querySelector(".cantidad")) {
            cantidadSpan.textContent = "Cantidad: 1";
            cantidadSpan.classList.add("cantidad");
            elemento.appendChild(cantidadSpan);
        } else {
            let cantidad = parseInt(elemento.querySelector(".cantidad").textContent.split(": ")[1]);
            cantidad++;
            elemento.querySelector(".cantidad").textContent = "Cantidad: " + cantidad;
        }
    }

    function restarCantidad(elemento) {
        if (elemento.querySelector(".cantidad")) {
            let cantidad = parseInt(elemento.querySelector(".cantidad").textContent.split(": ")[1]);
            if (cantidad > 1) {
                cantidad--;
                elemento.querySelector(".cantidad").textContent = "Cantidad: " + cantidad;
            } else {
                elemento.querySelector(".cantidad").remove();
            }
        }
    }

    function eliminarBebida(elemento) {
        elemento.remove();
    }
});
