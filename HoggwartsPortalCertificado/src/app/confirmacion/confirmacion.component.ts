import { Component, OnInit } from '@angular/core';
import { MostrarConfirmacionService } from './mostrar-confirmacion.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {


  constructor(public mostrarConfirmacionService: MostrarConfirmacionService) { }

  ngOnInit(): void {
  }

  ocultarModal(){
    this.mostrarConfirmacionService.ocultarModal();
  }

}
