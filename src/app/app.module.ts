import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './toolbar/toolbar.module';
import { InicioComponent } from './inicio/components/inicio/inicio.component';
import { InicioModule } from './inicio/inicio.module';
import { RegistroCorrectoComponent } from './shared/components/registro-correcto/registro-correcto.component';
import { SharedModule } from './shared/shared.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroCorrectoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    InicioModule,
    BrowserAnimationsModule,
    CursosModule,
    AlumnosModule,
    InscripcionesModule,
    SharedModule,
    MatSidenavModule
  ],
  exports: [
    MatSidenavModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
