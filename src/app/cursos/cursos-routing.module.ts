import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
    {
        path: "cursos", children: [
            { path: "listaCursos", component: ListaCursosComponent },
            { path: "agregarCursos", component: AgregarCursosComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule { }