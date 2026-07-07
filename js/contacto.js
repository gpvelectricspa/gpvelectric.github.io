// Inicializa EmailJS
emailjs.init({
    publicKey: "TU_PUBLIC_KEY"
});

const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const datos = {

        nombre: document.getElementById("nombre").value,

        correo: document.getElementById("correo").value,

        telefono: document.getElementById("telefono").value,

        asunto: document.getElementById("asunto").value,

        mensaje: document.getElementById("mensaje").value

    };

    emailjs.send(

        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        datos

    )

    .then(function () {

        document.getElementById("resultado").innerHTML =
        "<p style='color:green;'>✅ Mensaje enviado correctamente.</p>";

        formulario.reset();

    })

    .catch(function (error) {

        console.error(error);

        document.getElementById("resultado").innerHTML =
        "<p style='color:red;'>❌ Ocurrió un error al enviar el mensaje.</p>";

    });

});