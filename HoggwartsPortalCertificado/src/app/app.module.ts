import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './sistema/pedidos/pedidos.component';
import { AddPedidoComponent } from './add-pedido/add-pedido.component';
import { HomeComponent } from './home/home.component';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { EditPedidoComponent } from './edit-pedido/edit-pedido.component';
import { DetailPedidoComponent } from './detail-pedido/detail-pedido.component';
import { LoginGuard } from './login/login.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PedidosComponent,
    AddPedidoComponent,
    HomeComponent,
    ConfirmacionComponent,
    EditPedidoComponent,
    DetailPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'pedidos', component: PedidosComponent, canActivate: [LoginGuard] },
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
