document.addEventListener("DOMContentLoaded", function () {
    const colores = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let delay = 500;

    colores.forEach((color, index) => {
        setTimeout(() => {
            let gota = document.createElement("div");
            gota.classList.add("gota");
            gota.style.backgroundColor = color;
            gota.style.left = `${Math.random() * 100}vw`;
            gota.style.top = `${Math.random() * 100}vh`;
            document.body.appendChild(gota);
        }, index * delay);
    });

    setTimeout(() => {
        document.querySelectorAll(".gota").forEach(el => el.remove());
        let mensaje = document.createElement("div");
        mensaje.classList.add("mensaje");
        mensaje.textContent = "Feliz Cumpleaños";
        mensaje.style.color = "white";
        document.body.appendChild(mensaje);

        setTimeout(() => {
            for (let i = 0; i < mensaje.textContent.length; i++) {
                let globo = document.createElement("div");
                globo.classList.add("globo");
                globo.style.left = `${20 + i * 50}px`;
                globo.style.bottom = "10px";
                globo.style.backgroundColor = colores[i % colores.length];
                document.body.appendChild(globo);

                setTimeout(() => {
                    globo.style.animation = "subir 3s forwards";
                }, i * 300);
            }
        }, 2000);
    }, colores.length * delay + 1000);
});
