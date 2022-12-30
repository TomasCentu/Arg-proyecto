import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass']
})
export class ProyectosComponent implements OnInit{
  constructor(private pro: UsuarioService) {}

  proyecto: any;

  ngOnInit(): void {
    this.pro.obtenerDatos().subscribe(data => this.proyecto = data.usuario.proyectos)
  }
}
