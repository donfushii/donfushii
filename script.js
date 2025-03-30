document.addEventListener("DOMContentLoaded", function () {
    const colores = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const mensaje = "Feliz Cumpleaños".split("");
    const contenedor = document.getElementById("contenedor");
    let delay = 500;

    mensaje.forEach((letra, index) => {
        setTimeout(() => {
            let gota = document.createElement("div");
            gota.classList.add("gota");
            gota.style.backgroundColor = colores[index % colores.length];
            contenedor.appendChild(gota);

            setTimeout(() => {
                gota.classList.remove("gota");
                gota.classList.add("letra");
                gota.textContent = letra;
                gota.style.color = colores[index % colores.length];
            }, 500);
        }, index * delay);
    });

    setTimeout(() => {
        let letras = document.querySelectorAll(".letra");
        letras.forEach((letra, i) => {
            setTimeout(() => {
                let globo = document.createElement("div");
                globo.classList.add("globo");
                globo.style.left = letra.offsetLeft + "px";
                globo.style.bottom = "0px";
                globo.style.backgroundColor = colores[i % colores.length];
                document.body.appendChild(globo);

                setTimeout(() => {
                    globo.style.animation = "subir 3s forwards";
                    letra.style.animation = "subir 3s forwards";
                }, 200);
            }, i * 300);
        });
    }, mensaje.length * delay + 1000);
});
