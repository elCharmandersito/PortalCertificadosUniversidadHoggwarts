import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MostrarConfirmacionService } from '../confirmacion/mostrar-confirmacion.service';
import { Pedido } from '../IPedido';
import { PedidosService } from '../sistema/pedidos/pedidos.service';

@Component({
  selector: 'app-detail-pedido',
  templateUrl: './detail-pedido.component.html',
  styleUrls: ['./detail-pedido.component.css']
})
export class DetailPedidoComponent implements OnInit {

  formPedido: FormGroup;
  codigo: String= "";
  pedidoActual : Pedido;
  public previsualizacion: string='';

  constructor(public _DomSanitizationService: DomSanitizer, public pedidosService: PedidosService, private formBuilder: FormBuilder) { 
    this.formPedido = this.formBuilder.group({
      nombreCliente: [this.pedidosService.pedidoActual?.nombreCliente, [Validators.required]],
      telefono: [this.pedidosService.pedidoActual?.telefono, [Validators.required]],
      fechaDeIngreso: [this.pedidosService.pedidoActual?.fechaIngreso.toString().split('T')[0],[Validators.required]],
      fechaDeEntrega: [this.pedidosService.pedidoActual?.fechaEntrega.toString().split('T')[0],[Validators.required]],
      nombrePedido: [this.pedidosService.pedidoActual?.nombrePedido, [Validators.required]],
      presupuesto: [this.pedidosService.pedidoActual?.presupuesto, [Validators.required]],
      estadoDelPedido: [this.pedidosService.pedidoActual?.estadoDelPedido,[Validators.required]],
      estadoDePago: [this.pedidosService.pedidoActual?.estadoDePago, [Validators.required]],
      correo : [this.pedidosService.pedidoActual?.email ,[Validators.required]],
      abono: [this.pedidosService.pedidoActual?.abono, [Validators.required]],
      indicaciones: [this.pedidosService.pedidoActual?.indicaciones,[Validators.required]],
      URLImagen: ["", [Validators.required]]
    });
    this.pedidoActual = this.pedidosService.pedidoActual;
    this.previsualizacion = this.pedidoActual.URLImagen; 
  }

  ngOnInit(): void { }


  ocultarModal(){
    this.pedidosService.ocultarModalDetail();
  }

}
