function actualizarContador() {
  const fechaObjetivo = new Date('2025-05-16T23:59:00');

  const ahora = new Date();

  const diferencia = fechaObjetivo.getTime() - ahora.getTime();

  if (diferencia <= 0) {
    document.querySelector('.box2').innerHTML = '<p>¡El tiempo ha terminado!</p>';
    clearInterval(intervalo);
    return;
  }

  const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById('dias').textContent = diasRestantes.toString().padStart(2, '0');
  document.getElementById('horas').textContent = horasRestantes.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = minutosRestantes.toString().padStart(2, '0');
  document.getElementById('segundos').textContent = segundosRestantes.toString().padStart(2, '0');
}

const intervalo = setInterval(actualizarContador, 1000);
actualizarContador();