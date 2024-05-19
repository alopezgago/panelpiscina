
variarValor = ( paso = 1 ) => {
    // validaciones
    if(typeof paso != 'number') throw Error('el paso debe ser un número');
    if(typeof(parseFloat(this.valor)) != 'number' && this.tipo === 'numero') 
        throw Error('El valor debe ser un número');


    switch (this.tipo) {
        case TiposInd.Numero:
                if(typeof(this.valor) === 'string') this.valor = this.valor.replace(/,/g,'.');
                return this.valor = this.valor*1 + paso;

        case TiposInd.Hora:
            console.log(`Indicador tipo HORA`);
            return;

        default:
            console.log(`El tipo ${this.tipo} no se puede variar`);
            break;
    }

    return this.valor;
};


variarHora = ( pasominutos = 1 ) => {
    // sacar la hora y los minutos del string
    let horaMinuto = this.valor.split(':');
    // convertimos todo a minutos
    let minutos = Number(horaMinuto[0])*60 + Number(horaMinuto[1]);
    // sumamos/restamos los minutos pasados a la función
    minutos = minutos + pasominutos*1;
    // comprobrmos limites
    if (minutos <=0) minutos = 0;
    if (minutos >=5999) minutos = 5999;
    
    // convertimos a formato HH:MM
    let horas = Math.trunc(minutos/60);
    let minutosNuevos = minutos % 60;
    
    console.log(minutos, horas, minutosNuevos);

    return this.valor = ("0" + horas.toString()).slice(-2)+ ":" + 
                        ("0" + minutosNuevos.toString()).slice(-2);

};
