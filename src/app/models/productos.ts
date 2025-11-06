export class Producto{
    //las propiedades para que sean accesibles deben ser publicas
    public nombre: string;
    public imagen: string;
    public precio: number;
    //vamos a crear un constructor con parametros para que reciba la info de las propiedades directamente
    constructor(name:string, image: string, price:number){
        this.nombre = name;
        this.imagen = image;
        this.precio = price;
    }
}