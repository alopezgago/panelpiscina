
export const FFecha = {
    dmahms: 'd/m/aa-hh:mm:ss',
    dmahm: 'd/m/aa-hh:mm',
    dma: 'd/m/aa',
    dia: 'd',
    hhmm: 'hh:mm', 
    hhmmss: 'hh:mm:ss', 
    ddmmaaLocal: 'ddmmaaLocal',
    fechaLocalLarga: 'fechaLarga',
    fechaLocalCorta: 'fechaCorta',
    fyhLocalLarga: 'fyhLarga',
    fyhLocalCorta: 'fyhCorta',
    prueba: 'prueba',
}

/**
 * 
 * @param {Date} fecha 
 * @param {FormatoFecha} formato 'd/m/aa-hh:mm:ss' | 'd/m/aa-hh:mm' | 'd/m/aa'| 'd' |
 * @returns {String} fecha formateada
 */
export const formateaFecha = ( fechaN = new Date(), formato = FFecha.dmahm) => {
    if (!fechaN) throw new Error('use-case (formateaFecha): Un objeto tipo Date es requerido');
    
    // TODO: optimizar y poner orden el tema de fechas (reducir opciones...)
    const fecha = new Date(fechaN);

    
    if ( typeof fechaN === 'string' ) { 
        console.log('fecha es string');
    };

    // if ( typeof fecha.getMonth === 'function' ) throw new Error('La fecha no tiene el formato adecuado');

    let fechaFormato = '';

    switch (formato) {
        case FFecha.dmahms:
            // Ej: dmahms: 22/5/2024-0:29:31
            fechaFormato =  fecha.getDate() + '/' +  (fecha.getMonth()+1) + '/' + fecha.getFullYear() + '-' +
                           fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
            break;

            case FFecha.dmahm:
            // Ej: dmahm: 22/4/2024-0:29
            fechaFormato =  fecha.getDate() + '/' +  (fecha.getMonth()+1) + '/' + fecha.getFullYear() + '-' +
                           fecha.getHours() + ':' + fecha.getMinutes();
            break;

        case FFecha.dma:
            // Ej: dma: 22/4/2024
            fechaFormato =  fecha.getDate() + '/' +  (fecha.getMonth()+1) + '/' + fecha.getFullYear();               
            break;

        case FFecha.dia:
            // Ej: dia: 22
            fechaFormato =  fecha.getDate();               
            break;

        case FFecha.hhmmss:
            /// Ej: hhmmss: 00:29:31
            fechaFormato =  fecha.toLocaleTimeString('es-es', 
                               { hour: "2-digit", minute: "2-digit", second:"2-digit"});
            break;

        case FFecha.hhmm:
            // Ej: hhmm: 00:29
            fechaFormato =  fecha.toLocaleTimeString('es-es', 
                               { hour: "2-digit", minute: "2-digit" }) ;
            break;

        case FFecha.ddmmaaLocal:
            // Ej: ddmmaaLocal: 22/05/24
            fechaFormato =  fecha.toLocaleDateString('es-es', 
                            {year:"2-digit", month:"2-digit", day:"2-digit"});
            break;

        case FFecha.fechaLocalLarga:
            // Ej: fechaLocalLarga: miércoles, 22 de may de 2024
            fechaFormato =  fecha.toLocaleDateString('es-ES', 
                            { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 
            break;

        case FFecha.fyhLocalLarga:
            // Ej: fyhLocalLarga: miércoles, 22 de mayo de 2024-00:29
            fechaFormato =  fecha.toLocaleDateString('es-ES', 
                            { weekday:"long", year:"numeric", month:"long", day:"numeric"}) + "-" +
                            fecha.toLocaleTimeString('es-es', 
                            { hour: "2-digit", minute: "2-digit" }) ;
            break;
        case FFecha.fyhLocalCorta:
            // Ej: fyhLocalCorta: mié, 22 may 2024-00:29
            fechaFormato =  fecha.toLocaleDateString('es-es', 
                            { weekday:"short", year:"numeric", month:"short", day:"numeric"}) + "-" +
                            fecha.toLocaleTimeString('es-es', 
                            { hour: "2-digit", minute: "2-digit" }) ;
            break;
        case FFecha.prueba:
            // Ej: prueba: 22/05/24
            fechaFormato =  fecha.toLocaleDateString('es-es', 
                            {year:"2-digit", month:"2-digit", day:"2-digit"});
            break;

        default:
            fechaFormato = 'revisa formato';
            break;
    }

   return fechaFormato;
}




export const FormatosMinutos = {
    hhmm: 'hhmm',
    hhmms: 'hhmm.s',
    dmmss: 'dhhmm',
}

/**
 * Para formatear un numero de minutos y mostrar un string con el formato solicitado HH:MM
 * Ejemplos: 'hhmm': 2000 min -> 33:20 | 'dhhmm': 2000 min -> 1d09h20m 
 * @param {Number} minutos a formatear
 * @param {*} formato tipo de conversión 'hhmm' | 'hhmm.s' | 'dhhmm'
 * @returns 
 */
export const formateaMinutos = ( minutos = 0, formato = FormatosMinutos.hhmm ) => {
    if( isNaN(minutos*1)) return 'Error: minutos no es numérico';
    
    let resul = '';
    let dd = 0, hh = 0, mm = 0, ss = 0;

    if( minutos < 0 ) {
        minutos = -1*minutos;
        resul = '-';
    }
        
    switch (formato) {
        case FormatosMinutos.hhmm:
            // convertimos a formato HH:MM
            hh = Math.trunc(minutos / 60);
            mm = Math.trunc(minutos % 60);
            //const ss = Math.trunc(((minutos % 60)-mm)*60);

            resul = resul + ("0" + hh.toString()).slice(-2) + ":" + 
                            ("0" + mm.toString()).slice(-2);


        break;

        case FormatosMinutos.hhmms:
            // convertimos a formato HH:MM.s
            hh = Math.trunc(minutos / 60);
            mm = Math.trunc(minutos % 60);
            ss = Math.trunc(((minutos % 60)-mm)*60);

            resul = resul + ("0" + hh.toString()).slice(-2) + ":" + 
                            ("0" + mm.toString()).slice(-2) + "." +
                            ss.toString() + "s";
        break;
        
        case FormatosMinutos.dmmss:
            dd = Math.trunc(minutos/1440);
            hh = Math.trunc((minutos % 1440)/60);
            mm = Math.trunc((minutos % 1440) % 60);
        
           resul = resul + dd.toString() + "d" + 
                            ("0" + hh.toString()).slice(-2) + "h" + 
                            ("0" + mm.toString()).slice(-2) + "m";
        break;

        default:
            resul = '00:00';
            break;
        }
                       
    return resul;
}

/**
 * 
 * @param {String} hhmm Cadena formato "HH:MM". Ejemplo: '01:30'  
 * @returns {Number}  minutos
 */
export const formateaHHMMaMin = ( hhmm ) => {
    if (!hhmm) throw new Error('use-case: una cadena con formato "HH:MM" es requerida.');

    let resul = 0;
    // separamos la hora (HH) y los minutos (MM) separando por los ':'
    let horaMinuto = hhmm.toString().trim().split(':');
    if(horaMinuto.length === 2) { //si hay 2 bloques (hh y mm)
        // convertimos todo a minutos
        resul = Number(horaMinuto[0])*60 + Number(horaMinuto[1]);
    }  
        // si solo hay un digito, no hay separación
    return resul;

}


/**
 * 
 * @param {Number} valor 
 * @param {Number} decimales 
 * @returns {String} string formateado 
 */
export const formateaDecValor = ( valor, decimales = 0 ) => {
    if (!valor) throw new Error('Se requiere un valor para formatear');
    let resul;
    if (!isNaN(valor)) 
        resul = valor.toFixed(decimales);


    return resul;
}