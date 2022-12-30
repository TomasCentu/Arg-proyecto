import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service'

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.sass']
})
export class SobreMiComponent implements OnInit{
  misDatos: any;

  constructor(private datos: UsuarioService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.misDatos = data;
    });
  }
}
