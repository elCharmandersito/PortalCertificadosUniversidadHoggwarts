export interface Pedido {
    pedidoId: number;
    codigo: string;
    nombreCliente: string;
    email: string;
    telefono: string;
    fechaIngreso: Date;
    fechaEntrega: Date;
    nombrePedido: string;
    presupuesto: number;
    estadoDelPedido: string;
    estadoDePago: string;
    abono: number;
    indicaciones: string;
    URLImagen: string;
};