const button = document.getElementById("toggle");
const extra = document.getElementById("extra");

button.addEventListener('click', () => {
    if (extra.classList.contains('hidden')) {
        extra.classList.remove('hidden');
        button.textContent = "Mostrar menos";
    } else {
        extra.classList.add('hidden');
        button.textContent = "Mostrar más";
    }
});