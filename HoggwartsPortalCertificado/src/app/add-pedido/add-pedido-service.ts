import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../IPedido';

@Injectable({
  providedIn: 'root'
})
export class AddPedidoService {

  public oculto: string = '';

  constructor(private http: HttpClient) { }

  ocultarModal() {
    console.log('ocultar modal');
    this.oculto = '';
  }

  mostrarModal() {
    this.oculto = 'block';
    console.log('mostrar modal');
  }

  addPedido(pedido: Pedido) {
    return this.http.post('http://localhost:3000/pedido?token='+localStorage.getItem('token'), pedido);
  }

  addImagen(imagen: any) {
    return this.http.post('http://localhost:3000/pedido/:id?token='+localStorage.getItem('token'), imagen);
  }

  enviarEmail(codigo: any, correo: any) {
    console.log("codigo: " + codigo);
    console.log("corr: " + correo);
    var body = {
      email: correo,
      codigo: codigo
      
    };
    return this.http.post('http://localhost:3000/sendemail?token='+localStorage.getItem('token'), body);
  }

}
