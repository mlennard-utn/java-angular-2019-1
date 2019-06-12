import { Component, OnInit } from '@angular/core';
import { NgLocaleLocalization } from '@angular/common';
import { SigningserviceService } from '../signingservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user: string;
  public password: string;
  public repassword: string;
  public mensajeError: string ='';
  public generos = [];
  public nacionalidades = [];
  public genero: string;
  public nacionalidad: string;

  constructor(private siginService: SigningserviceService) { }

  ngOnInit() {
    this.genero = "masculino";
    this.generos.push("masculino");
    this.generos.push("femenino");

    this.nacionalidad = "venezolano";
    this.nacionalidades.push("venezolano");
    this.nacionalidades.push("brasilero");
    this.nacionalidades.push("uruguayo");
    this.nacionalidades.push("paraguayo");

  }

  cambiarGenero(): void{
    console.log(this.genero);
    if(this.genero === 'masculino'){
      this.nacionalidades = [];
      this.nacionalidades.push("venezolano");
      this.nacionalidades.push("brasilero");
      this.nacionalidades.push("uruguayo");
      this.nacionalidades.push("paraguayo");
    } else {
      this.nacionalidades = [];
      this.nacionalidades.push("venezolana");
      this.nacionalidades.push("brasilera");
      this.nacionalidades.push("uruguaya");
      this.nacionalidades.push("paraguaya");
    }
  }


  validar(): void{

    if(this.password===this.repassword){
      // redireccionando
      this.siginService.registroUsuario(this.user,this.password);

      console.log('esta ok');
      this.mensajeError='Se registrara el usuario!';

    }else{
      this.mensajeError='La contraseña no coincide!';
    }

  }

}
