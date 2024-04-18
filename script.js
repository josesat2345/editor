document.addEventListener("DOMContentLoaded", function() {
  // Obtener el formulario, la alerta y el div del formulario
  const form = document.getElementById("budgetForm");
  const successMessage = document.getElementById("successMessage");
  const container = document.querySelector(".formPresupuesto");

  // Agregar un evento de escucha al envío del formulario
  form.addEventListener("submit", function(event) {
      // Prevenir el envío del formulario por defecto
      event.preventDefault();
      
      // Ocultar el contenido del formulario y mostrar la alerta
      container.style.display = "none";
      successMessage.style.display = "flex";

      // Redirigir a la página de inicio después de 7 segundos
      setTimeout(function() {
          window.location.href = "/index.html";
      }, 5000); // 7000 milisegundos = 7 segundos
  });

  // Agregar un evento de escucha al cambio en el primer select
  const formatSelect = document.getElementById("format");
  const otherFormatSelect = document.getElementById("otherFormat");

  formatSelect.addEventListener("change", function() {
      // Si la opción seleccionada es "Otro", mostrar el segundo select, de lo contrario, ocultarlo
      if (formatSelect.value === "otro") {
          otherFormatSelect.style.display = "block";
      } else {
          otherFormatSelect.style.display = "none";
      }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y el contenedor de la alerta
    const form = document.querySelector(".form");
    const alertContainer = document.querySelector(".alertContainer");

    // Agregar un evento de escucha al envío del formulario
    form.addEventListener("submit", function(event) {
        // Prevenir el envío del formulario por defecto
        event.preventDefault();

        // Mostrar el contenedor de la alerta
        alertContainer.style.display = "block";

        // Redirigir a la página de inicio después de 5 segundos (opcional)
        setTimeout(function() {
            window.location.href = "/index.html";
        }, 5000); // 5000 milisegundos = 5 segundos
    });
});
