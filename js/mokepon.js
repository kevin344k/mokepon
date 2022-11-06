//funcion que se carga al cargarse la pagina web 
let ataqueJugador = ""
let ataqueEnemigo = ""
let vidasJugador = 3
let vidasEnemigo = 3
function iniciarJuego() {
  
 
  let seleccionar_ataque=document.getElementById('seleccionar_ataque')
  seleccionar_ataque.style.display='none'
  let botonMascota = document.getElementById('boton-mascotas')
  botonMascota.addEventListener('click', seleccionarMascotaJugador)
  let ataqueFuego = document.getElementById('boton-fuego')
  ataqueFuego.addEventListener('click', fuego)
  let ataqueAgua = document.getElementById('boton-agua')
  ataqueAgua.addEventListener('click', agua)
  let ataqueTierra = document.getElementById('boton-tierra')
  ataqueTierra.addEventListener('click', tierra)
  let restart = document.getElementById('boton-reiniciar')
  restart.addEventListener('click', reiniciarJuego)
 
 
  ocultarRestart(true)
 
}
//funcion que selecciona la mascota del prota
function seleccionarMascotaJugador() {
  //declaracion de variables
  
  let seleccionar_ataque=document.getElementById('seleccionar_ataque')
  seleccionar_ataque.style.display='flex'


  let hipodoge = document.getElementById('hipodoge')
  let capipepo = document.getElementById('capipepo')
  let ratigueya = document.getElementById('ratigueya')
  
  let spanMascotaJugador = document.getElementById('span-mascota-jugador')

  let seleccionarMascota=document.getElementById('seleccinar_mascota')
  seleccionarMascota.style.display='none'


  if (hipodoge.checked) {
    spanMascotaJugador.innerHTML = 'hipodoge'
  } else if (capipepo.checked) {
    spanMascotaJugador.innerHTML = 'capipepo'
  } else if (ratigueya.checked) {
    spanMascotaJugador.innerHTML = 'ratigueya'
  } else {
    alert("por favor selecciona un mokepon")
  }
  //luego de cargar la mascota del prota se carga la mascota del enemigo
  selecionarEnemigosAleatorio()
}
//funcion clave que nos permite obtener numeros aleatorios
function aleatorio(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min)
}
//funcion para obtener la mascota del enemigo
function selecionarEnemigosAleatorio() {
  let mascotaEnemigo = document.getElementById('span-mascota-enemigo')
  let enemigo = aleatorio(1, 3)




  if (enemigo == 1) {
    mascotaEnemigo.innerHTML = "hipodoge"
  } else if (enemigo == 2) {
    mascotaEnemigo.innerHTML = "capipepo"
  } else {
    mascotaEnemigo.innerHTML = "ratigueya"
  }
}
//ataques 
function fuego() {
  ataqueJugador = '🔥'
  ataqueAleatorio()
}
function agua() {
  ataqueJugador = '💧'

  ataqueAleatorio()
}
function tierra() {
  ataqueJugador = '🌱'

  ataqueAleatorio()
}
////ataque enemigo
function ataqueAleatorio() {
  ataque = aleatorio(4, 6)
  if (ataque == 4) {
    ataqueEnemigo = "🔥"
  } else if (ataque == 5) {
    ataqueEnemigo = "💧"
  } else {
    ataqueEnemigo = "🌱"
  }

  combate()
}
//combate
function combate() {
 

  let vidasJ = document.getElementById('vidas-jugador')
  let vidasE = document.getElementById('vidas-enemigo')
  if (ataqueJugador == '💧' && ataqueEnemigo == '🔥') {
    crearMensaje('✓')
    vidasEnemigo--
    vidasE.innerHTML = vidasEnemigo
  } else if (ataqueJugador == '🔥' && ataqueEnemigo == '🌱') {
    crearMensaje('✓')
    vidasEnemigo--
    vidasE.innerHTML = vidasEnemigo
  } else if (ataqueJugador == ataqueEnemigo) {
    crearMensaje('EMPATE')
  } else if (ataqueJugador == '🌱' && ataqueEnemigo == '💧') {
    crearMensaje('✓')
    vidasEnemigo--
    vidasE.innerHTML = vidasEnemigo
  } else {
    crearMensaje('✕')
    vidasJugador--
    vidasJ.innerHTML = vidasJugador
  }
  //revisar vidas
  revisarVidas()
}
function revisarVidas() {
  if (vidasEnemigo == 0) {
    let sectionMensajes = document.getElementById('resultado')
    sectionMensajes.innerHTML=resultado.innerHTML=""
    crearMensajeFinal('Ganaste')
  } else if (vidasJugador == 0) {
    let sectionMensajes = document.getElementById('resultado')
    sectionMensajes.innerHTML=resultado.innerHTML=""
    crearMensajeFinal('Perdiste')
  }
}
//muestra el mensaje de la batalla
function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById('resultado')
  sectionMensajes.innerHTML=resultado.innerHTML=resultado
  let ataquesJugador= document.getElementById('ataquesJugador')
  let ataquesEnemigos = document.getElementById('ataquesEnemigos')



let nuevoAtaquedelJugador=document.createElement('p')
let nuevoAtaquedelEnemigo=document.createElement('p')


nuevoAtaquedelJugador.innerHTML=ataqueJugador
nuevoAtaquedelEnemigo.innerHTML=ataqueEnemigo




 ataquesJugador.appendChild(nuevoAtaquedelJugador)
  ataquesEnemigos.appendChild(nuevoAtaquedelEnemigo)



}
function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById('mensajes')
  let h2 = document.createElement('p')
  h2.innerHTML = resultadoFinal
   sectionMensajes.appendChild(h2)
  let ataqueFuego = document.getElementById('boton-fuego')
  ataqueFuego.disabled = true
  let ataqueAgua = document.getElementById('boton-agua')
  ataqueAgua.disabled = true
  let ataqueTierra = document.getElementById('boton-tierra')
  ataqueTierra.disabled = true
  // ocultarMessage(false)
  ocultarRestart(false)
}




// function ocultarMessage(visible) {
//   let sectionMensajes = document.getElementById('mensajes')
//   sectionMensajes.hidden = visible
// }
function ocultarRestart(visible) {
  let restart = document.getElementById('boton-reiniciar')
  restart.hidden = visible
}
function reiniciarJuego() {
  location.reload()
}
//objeto window que se encarga de iniciar el juego mediante el evento load.
window.addEventListener('load', iniciarJuego)