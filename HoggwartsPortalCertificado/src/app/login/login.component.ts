import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  showInfo = {
    infoInicio: false,
    infoAbout: false,
    infoProducto: false,
    infoPedidos: false,
    infoContactanos: false
  }

  changeInfoPage = {
    pageOne: false,
    pageTwo: false,
    pageThree: false,
    pagination: false
  }

  changeStateContent(btn: string) {
    switch (btn) {
      case 'inicio':
        this.showInfo.infoInicio = !this.showInfo.infoInicio,
          this.showInfo.infoAbout = false;
        this.showInfo.infoProducto = false;
        this.showInfo.infoPedidos = false;
        this.showInfo.infoContactanos = false;
        break;

      case 'about':
        this.showInfo.infoAbout = !this.showInfo.infoAbout,
          this.showInfo.infoInicio = false;
        this.showInfo.infoProducto = false;
        this.showInfo.infoPedidos = false;
        this.showInfo.infoContactanos = false;
        break;

      case 'producto':
        this.showInfo.infoProducto = !this.showInfo.infoProducto,
          this.showInfo.infoInicio = false;
        this.showInfo.infoAbout = false;
        this.showInfo.infoPedidos = false;
        this.showInfo.infoContactanos = false;
        break;

      case 'pedidos':
        this.showInfo.infoPedidos = !this.showInfo.infoPedidos,
          this.showInfo.infoInicio = false;
        this.showInfo.infoAbout = false;
        this.showInfo.infoProducto = false;
        this.showInfo.infoContactanos = false;
        break;

      case 'contactanos':
        this.showInfo.infoContactanos = !this.showInfo.infoContactanos,
          this.showInfo.infoInicio = false;
        this.showInfo.infoAbout = false;
        this.showInfo.infoProducto = false;
        this.showInfo.infoPedidos = false;
        break;
    }
  }

  changePage(btn: string) {
    switch (btn) {
      case 'pageOne':
        this.changeInfoPage.pageOne = !this.changeInfoPage.pageOne;
        this.changeInfoPage.pageTwo = false;
        this.changeInfoPage.pageThree = false;
        break;

      case 'pageTwo':
        this.changeInfoPage.pageTwo = !this.changeInfoPage.pageTwo;
        this.changeInfoPage.pageOne = false;
        this.changeInfoPage.pageThree = false;
        break;

      case 'pageThree':
        this.changeInfoPage.pageThree = !this.changeInfoPage.pageThree;
        this.changeInfoPage.pageOne = false;
        this.changeInfoPage.pageTwo = false;
        break;

      case 'pagination':
        this.changeInfoPage.pagination = !this.changeInfoPage.pagination;
        this.changeInfoPage.pageOne = !this.changeInfoPage.pageOne;
        break;

      case 'off':
        this.changeInfoPage.pagination = false,
          this.changeInfoPage.pageOne = false,
          this.changeInfoPage.pageTwo = false,
          this.changeInfoPage.pageThree = false
        break;
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe((res: any) => {
      console.log(res);
    });
  }
}