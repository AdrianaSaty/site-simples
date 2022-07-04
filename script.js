function showText() {
    const text = document.querySelector(".hide-text");
    const btn = document.querySelector("button");
    if(text.className == "hide-text show") {
        text.className = "hide-text";
        btn.innerHTML = "Mostrar conteúdo"; // Mostrar mais
    } else {
        text.className = "hide-text show";
        btn.innerHTML = "Ocultar conteúdo"; // Mostrar menos
    }
}