import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service'

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.sass']
})

export class ExperienciasComponent implements OnInit{
  misExp: any;

  constructor(private exp: UsuarioService) {}

  ngOnInit(): void {
    this.exp.obtenerDatos().subscribe(data => {
      this.misExp = data.usuario.experiencias;
    });
  }
}
