export class Producto{
    //las propiedades para que sean accesibles deben ser publicas
    
    //vamos a crear un constructor con parametros para que reciba la info de las propiedades directamente
    constructor(
        public nombre: string,
        public imagen: string,
        public precio: number,
    ){
    }
}