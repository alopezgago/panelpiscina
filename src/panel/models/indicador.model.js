

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
     * @param {Date} updateAt Fecha de actualización
     * @param {String} detalle Subtitulo o detalle del indicador
     * @param {Number} decimales Numero de decimales a mostrar
     */
    constructor(id = 'ind-00', 
                nombre='Indicador', 
                valor = '0', 
                tipo = 'Numero',
                magnitud = 'mmm', 
                paso = 1, 
                grupo ='Grupo ND',
                updateAt = new Date(),
                detalle = '',
                decimales = undefined,
            ) {
        

        this.id = id;
        this.nombre = nombre;

        this.valor = valor;
        this.tipo = tipo;
        this.magnitud = magnitud;
        this.grupo = grupo;
        this.paso = paso;
        this.updateAt = updateAt;
        this.detalle = detalle;
        this.decimales = decimales;

    }

    // Getter

    // Setter

    // Métodos
 
}