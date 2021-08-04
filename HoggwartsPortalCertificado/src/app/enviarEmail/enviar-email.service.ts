import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {

  //nodemailer = require('nodemailer');

  constructor(private http: HttpClient) {
  }
  /*
  //Configuracion SMTP
  createTrans = () => {
    var transport = this.nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "de24a12b2d1d42",
        pass: "572427ad0a91f6"
      }
    });
    return transport;
  }

    //Se encarga de enviar el correo
    async sendMail(){
      console.log("Estoy dentro de sendMail");
      const transporter = this.createTrans();
      const info= await transporter.sendMail({
        from:'ysalejandra@gmail.com',
        to:'ysalejandra@gmail.com',
        subject:"Hola gracias por tu compra",
        html:"<b>Hola mundo</b>",
      });
      console.log("Message sent: %s",info.messageId);
      return
    }

    /*
    sendMail = async () =>{
      console.log("Estoy dentro de sendMail");
      const transporter = this.createTrans();
      const info= await transporter.sendMail({
        from:'ysalejandra@gmail.com',
        to:'ysalejandra@gmail.com',
        subject:"Hola gracias por tu compra",
        html:"<b>Hola mundo</b>",
      });
      console.log("Message sent: %s",info.messageId);
      return
    }*/

  //exports.sendMail = () => sendMail();


  sendCorreo() {
    this.http.post("/sendemail?token="+localStorage.getItem('token'), "ysalejandra@gmail.com").subscribe(data => {
      console.log(data);
    });

  }


}


