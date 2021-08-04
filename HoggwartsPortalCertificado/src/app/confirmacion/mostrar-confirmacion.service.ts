import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarConfirmacionService {

  public oculto: String="";
  public cod:String="";

  constructor() { }

  ocultarModal() {
    console.log('ocultar modal');
    this.oculto= '';
  }

  mostrarModal(codigo: any){
    this.oculto = 'block';
    this.cod=codigo;
    console.log('mostrar modal');
  }
}
