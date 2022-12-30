import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{

  constructor(private link: UsuarioService) {}

  misRedes: any;

  ngOnInit(): void {
    this.link.obtenerDatos().subscribe(data => this.misRedes = data.usuario.redes)
  }
}
