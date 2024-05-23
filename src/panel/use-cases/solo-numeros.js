export const soloLetras = (e) => {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }


  export const esNum = (ev, el) => {
    /* ev: evento; el: elemento; */
    const tecla =  ev.keyCode || ev.which;

    // Permite un solo punto decimal
    if (el.value.indexOf('.') == -1 ? tecla == 46 : false) { return true; }

    // Permite números negativos (después de escribir un número)
    if (tecla == 45 && el.value !== '') { el.value = (-1) * el.value; }

    // Permite tecla de retroceso (borrar)
    if (tecla == 8) { return true; }

    // Permite tecla Tab
    if (tecla == 9) { return true; }

    // Patrón de entrada: solo acepta numeros positivos
    patron = /[0-9]/;
    tecla_fin = String.fromCharCode(tecla);
    return patron.test(tecla_fin);
}