import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-hard-skill',
  templateUrl: './hard-skill.component.html',
  styleUrls: ['./hard-skill.component.sass']
})
export class HardSkillComponent implements OnInit {

  constructor(private skill: UsuarioService) {}

  hard: any
  soft: any

  ngOnInit(): void {
    this.skill.obtenerDatos().subscribe(dataH => this.hard = dataH.usuario.habilidades.hardSkills);
    this.skill.obtenerDatos().subscribe(dataS => this.soft = dataS.usuario.habilidades.softSkills);
  }

  randomColor(): String {
    let color = ["primary", "secondary", "info", "warning", "success", "danger"];
    let randomNUM = Math.floor(Math.random() * color.length);

    return color[randomNUM];
  }
}
