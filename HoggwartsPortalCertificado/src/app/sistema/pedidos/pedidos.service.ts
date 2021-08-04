import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pedido } from 'src/app/IPedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  public ocultoEdit : string = '';
  public ocultoDetail : string = '';
  public pedidoActual : Pedido;
  constructor(private http : HttpClient) { }

  getPedidos(): Observable<Pedido[]> {
    return this.http.get('http://localhost:3000/pedido?token='+localStorage.getItem('token')).pipe(map((res: any) => res.data));
  }

  ocultarModalEdit() {
    console.log('ocultar modal');
    this.ocultoEdit= '';
  }

  mostrarModalEdit(pedido : Pedido){
    this.ocultoEdit = 'block';
    this.pedidoActual = pedido;
    console.log('mostrar modal');
  }

  ocultarModalDetail() {
    console.log('ocultar modal');
    this.ocultoDetail= '';
  }

  mostrarModalDetail(pedido : Pedido){
    this.ocultoDetail = 'block';
    this.pedidoActual = pedido;
    console.log('mostrar modal');
  }

  updatePedido(pedido : Pedido){
    return this.http.put('http://localhost:3000/pedidos?token='+localStorage.getItem('token'), pedido);
  }

  uploadImage(nombre : string, uploadData : FormData) {
    return this.http.post(`http://localhost:3000/upload/pedido/${nombre}?token=${localStorage.getItem('token')}`, uploadData);
  }

  deletePedido(pedido: Pedido){
    console.log(pedido);
    const options = {
      body: {
        pedidoId: pedido.pedidoId
      },
    };
    return this.http.delete('http://localhost:3000/pedidos?token='+localStorage.getItem('token'), options);

  }
}
