import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnosComponent } from './components/agregar-alumnos/agregar-alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {
    path: "alumnos", children: [
      { path: "listaAlumnos", component: ListaAlumnosComponent },
      { path: "agregarAlumnos", component: AgregarAlumnosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
