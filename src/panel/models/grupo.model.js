

export class Grupo {

    /**
     * Objeto que registra los grupos
     * @param {String} id identificador del grupo
     * @param {String} grupo descripción del grupo
     * @param {Date} updateAt Fecha de actualización
     */
    constructor(id = 'gru-00', 
                nombre='grupo', 
                updateAt = new Date()) {
        

        this.id = id;
        this.nombre = nombre;
        this.updateAt = updateAt;

    }

    // Getter

    // Setter

    // Métodos
 
}