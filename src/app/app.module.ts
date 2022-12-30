import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyComponent } from './componentes/body/body.component';
import { SobreMiComponent } from './componentes/body/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './componentes/body/formacion/formacion.component';
import { ExperienciasComponent } from './componentes/body/experiencias/experiencias.component';
import { ProyectosComponent } from './componentes/body/proyectos/proyectos.component';
import { HardSkillComponent } from './componentes/body/hard-skill/hard-skill.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SobreMiComponent,
    FormacionComponent,
    ExperienciasComponent,
    ProyectosComponent,
    HardSkillComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
