
export const FormatosFecha = {
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
export const formatearFecha = ( fecha = new Date(), formato = FormatoFecha.dmahm) => {
    if (!fecha) throw new Error('use-case (formateaFecha): Un objeto tipo Date es requerido');

    let fechaFormato = '';

    switch (formato) {
        case FormatosFecha.dmahms:
            fechaFormato =  fecha.getDate() + '/' +  fecha.getMonth() + '/' + fecha.getFullYear() + '-' +
                           fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
            break;

        case FormatosFecha.dmahm:
            fechaFormato =  fecha.getDate() + '/' +  fecha.getMonth() + '/' + fecha.getFullYear() + '-' +
                           fecha.getHours() + ':' + fecha.getMinutes();
            break;

        case FormatosFecha.dma:
            fechaFormato =  fecha.getDate() + '/' +  fecha.getMonth() + '/' + fecha.getFullYear();               
            break;

        case FormatosFecha.hhmm:
            fechaFormato =  fecha.toLocaleTimeString('es-es', 
                               { hour: "2-digit", minute: "2-digit", second:"numeric"}) ;
            break;

        case FormatosFecha.hhmm:
            fechaFormato =  fecha.toLocaleTimeString('es-es', 
                               { hour: "2-digit", minute: "2-digit" }) ;
            break;

        case FormatosFecha.d:
            fechaFormato =  fecha.getDate();
            break;

        case FormatosFecha.fechaLocalLarga:
            fechaFormato =  fecha.toLocaleDateString('es-es', 
                            {year:"2-digit", month:"2-digit", day:"2-digit"});
            break;

        case FormatosFecha.fechaLocalLarga:
            fechaFormato =  fecha.toLocaleDateString('es-es', 
                            { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
            break;

        case FormatosFecha.fyhLocalLarga:
            fechaFormato =  fecha.toLocaleDateString('es-es', 
                            { weekday:"long", year:"numeric", month:"long", day:"numeric"}) + "-" +
                            fecha.toLocaleTimeString('es-es', 
                            { hour: "2-digit", minute: "2-digit" }) ;
            break;
        case FormatosFecha.fyhLocalCorta:
            fechaFormato =  fecha.toLocaleDateString('es-es', 
                            { weekday:"short", year:"numeric", month:"short", day:"numeric"}) + "-" +
                            fecha.toLocaleTimeString('es-es', 
                            { hour: "2-digit", minute: "2-digit" }) ;
            break;
        case FormatosFecha.prueba:
            fechaFormato =  fecha.toLocaleDateString('es-es', 
                            {year:"2-digit", month:"2-digit", day:"2-digit"});
            break;

        default:
            fechaFormato = 'revisa formato';
            break;
    }

   return fechaFormato;
}