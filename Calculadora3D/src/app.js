// This file contains the JavaScript code for the application, including the logic for calculating costs and converting measurements.

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

function calcularCosto() {
  const filamento = +document.getElementById('filamento').value;
  const costoFilamentoKg = +document.getElementById('costoFilamento').value;
  const potencia = +document.getElementById('potencia').value;
  const horas = +document.getElementById('horas').value;
  const minutos = +document.getElementById('minutos').value;
  const tarifa = +document.getElementById('tarifa').value;
  const costoMano = +document.getElementById('costoMano').value;
  const ganancia = +document.getElementById('ganancia').value;

  const tiempoHoras = horas + minutos / 60;
  const costoFilamento = (filamento / 1000) * costoFilamentoKg;
  const consumoKWh = (potencia * tiempoHoras) / 1000;
  const costoElectricidad = consumoKWh * tarifa;
  const costoTotal = costoFilamento + costoElectricidad + costoMano;
  const precioVenta = costoTotal * (1 + ganancia / 100);

  document.getElementById('resultadoCosto').innerHTML = `
    <p><strong>Filamento:</strong> RD$ ${costoFilamento.toFixed(2)}</p>
    <p><strong>Electricidad:</strong> RD$ ${costoElectricidad.toFixed(2)}</p>
    <p><strong>Mano de obra:</strong> RD$ ${costoMano.toFixed(2)}</p>
    <p><strong>Costo total:</strong> RD$ ${costoTotal.toFixed(2)}</p>
    <p><strong>Precio de venta (con ${ganancia}%):</strong> RD$ ${precioVenta.toFixed(2)}</p>
  `;
}

function convertirMedidas() {
  const mm = +document.getElementById('milimetros').value;
  const cm = (mm / 10).toFixed(2);
  const pulgadas = (mm / 25.4).toFixed(2);

  document.getElementById('resultadoConversion').innerHTML = `
    <p><strong>Centímetros:</strong> ${cm} cm</p>
    <p><strong>Pulgadas:</strong> ${pulgadas} in</p>
  `;
}