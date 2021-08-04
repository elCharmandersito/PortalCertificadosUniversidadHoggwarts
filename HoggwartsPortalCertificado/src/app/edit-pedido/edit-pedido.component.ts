import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MostrarConfirmacionService } from '../confirmacion/mostrar-confirmacion.service';
import { Pedido } from '../IPedido';
import { PedidosService } from '../sistema/pedidos/pedidos.service';

@Component({
  selector: 'app-edit-pedido',
  templateUrl: './edit-pedido.component.html',
  styleUrls: ['./edit-pedido.component.css']
})
export class EditPedidoComponent implements OnInit {

  formPedido: FormGroup;
  codigo: String= "";
  pedidoActual : Pedido;
  public previsualizacion: string='';

  constructor(public _DomSanitizationService: DomSanitizer, public pedidosService: PedidosService, private formBuilder: FormBuilder, public mostrarConfirmacionService: MostrarConfirmacionService) { 
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
      URLImagen: ['', [Validators.required]]
    });
    this.pedidoActual = this.pedidosService.pedidoActual;
    this.previsualizacion = this.pedidoActual.URLImagen;
    console.log(this.pedidosService.pedidoActual?.fechaIngreso.toString());
    
  }

  formatDate(date:Date) : Date{
    console.log(date.toString());
    date = new Date(parseInt(date.toString().split('-')[2]), parseInt(date.toString().split("-")[1], parseInt(date.toString().split("-")[0])));
    console.log(date);
    return new Date(parseInt(date.toString().split('-')[2]), parseInt(date.toString().split("-")[1], parseInt(date.toString().split("-")[0])));
  }

  ngOnInit(): void {
    
  }

  saveData(){
    console.log(this.formPedido.get('estadoDelPedido')?.value);
    this.pedidoActual.fechaIngreso = this.formPedido.get('fechaDeIngreso')?.value;
    this.pedidoActual.fechaEntrega = this.formPedido.get('fechaDeEntrega')?.value;
    this.pedidoActual.estadoDelPedido = this.formPedido.get('estadoDelPedido')?.value;
    this.pedidoActual.indicaciones = this.formPedido.get('indicaciones')?.value;
    this.pedidoActual.email = this.formPedido.get('correo')?.value;
    this.pedidoActual.presupuesto = this.formPedido.get('presupuesto')?.value;
    this.pedidoActual.telefono = this.formPedido.get('telefono')?.value;
    this.pedidoActual.abono = this.formPedido.get('abono')?.value;
    this.pedidoActual.nombreCliente = this.formPedido.get('nombreCliente')?.value;
    this.pedidoActual.nombrePedido = this.formPedido.get('nombrePedido')?.value;
    this.pedidoActual.estadoDePago = this.formPedido.get('estadoDePago')?.value;
    if (this.previsualizacion) {
      this.pedidoActual.URLImagen = this.previsualizacion;
    }


    console.log(this.pedidoActual);
    this.pedidosService.updatePedido(this.pedidoActual).subscribe(res =>{
      console.log(res);
    });
    this.ocultarModalEdit();
  }

  capturarFile(event:any): any {
    
    const archivoCapturado = event.target.files[0];
    console.log("archivo Capturadooo", archivoCapturado);
    const uploadData = new FormData;
    uploadData.append('archivos', archivoCapturado, archivoCapturado.name);
    this.pedidosService.uploadImage(archivoCapturado.name, uploadData).subscribe((res: any) =>{
       
      this.previsualizacion = res.path; 
      console.log(res);

      console.log("Este es res path", res.path);
      
    });

  }

  ocultarModalEdit(){
    this.pedidosService.ocultarModalEdit();
  }

  mostrarMensaje(){
    console.log("El codigo es:"+this.formPedido.controls['codigo'].value);
    console.log("Estoy dentro de mostrar mensaje app component");
    this.mostrarConfirmacionService.mostrarModal(this.formPedido.controls['codigo'].value);
  }

}
