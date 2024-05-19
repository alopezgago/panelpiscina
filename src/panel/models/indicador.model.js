

export class Indicador {

    /**
     * Objeto que registra los datos de un indicador
     * @param {String} id identificador del indicador
     * @param {String} nombre descripción del indicador
     * @param {String|Number*} valor dato del indicador
     * @param {String} tipo numero | hora | texto
     * @param {String} magnitud unidad de medida del indicador
     * @param {Number} paso unidad para incrementar/decrementar el valor
     * @param {String} grupo Ambiental | Agua
     * @param {String} detalle Subtitulo o detalle del indicador
     * @param {Date} updateAt Fecha de actualización
     */
    constructor(id = 'ind-00', 
                nombre='Indicador', 
                valor = '0', 
                tipo = 'Numero',
                magnitud = 'mmm', 
                paso = 1, 
                grupo ='Grupo ND',
                detalle = '',
                updateAt = new Date()) {
        

        this.id = id;
        this.nombre = nombre;

        this.valor = valor;
        this.tipo = tipo;
        this.magnitud = magnitud;
        this.grupo = grupo;
        this.paso = paso;
        this.detalle = detalle;
        this.updateAt = updateAt;

    }

    // Getter

    // Setter

    // Métodos
 
}