const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (/*e.target.matches(".sobre") || */
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    }
});

document.addEventListener("mousemove", (e) => {
    if (e.target.closest(".contenedor")) {
        return;
    }
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.classList = 'mini-corazones';

    let size = Math.random() * 80;
    heart.style.width = 24 + size + 'px';
    heart.style.height = 20 + size + 'px';
    
    let transformValue = Math.random() * 360;
    heart.style.transform = `rotate(${transformValue}deg)`;

    body.appendChild(heart);

    setInterval(function() {
        heart.remove();
    }, 1000);
});