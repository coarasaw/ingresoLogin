import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  state:boolean = false;
  textoBoton:string='Autorizar';

  constructor() { }

  ngOnInit(): void {
  }

  ingresar(){
    this.state = !this.state;

      if (this.state) {
          document.getElementById("litheader").className = "poweron";
          document.getElementById("go").className = "";
          this.textoBoton = "Iniciando...";
      }else{
          document.getElementById("litheader").className = "";
          document.getElementById("go").className = "denied";
          this.textoBoton = "Acceso Denegado";
      }
  }
}