document.getElementById("btnYes").addEventListener("click", function() {
    document.getElementById("responseText").textContent = "¡Sabía que dirías que sí! 💖 Eres la mejor cosa que me ha pasado. Te amo.";
    document.getElementById("response").classList.remove("hidden");
});

document.getElementById("btnNo").addEventListener("click", function() {
    document.getElementById("responseText").textContent = "¡Oh no! 😢 Bueno, seguiré intentándolo hasta que digas que sí. 💕";
    document.getElementById("response").classList.remove("hidden");
});