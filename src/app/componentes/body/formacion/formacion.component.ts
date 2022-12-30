import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service'

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.sass']
})
export class FormacionComponent implements OnInit{
  misEstudios: any;

  constructor(private card: UsuarioService) {}

  ngOnInit(): void {
    this.card.obtenerDatos().subscribe(data => {
      this.misEstudios = data.usuario.estudios;
    });
  }
}
