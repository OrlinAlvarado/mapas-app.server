

class Marcadores {
    constructor(){
        this.activos = {};
    }
    
    agregarMarcador( marcador ){
        this.activos[ marcador.id ] = marcador;
        return marcador;
    }
    
    removerMarcador( id ){
        delete this.activos[ id ];
    }
    
    acualizarMarcador( marcador ){
        this.activos[ marcador.id ] =  marcador;
    }
    
}

module.exports = Marcadores;