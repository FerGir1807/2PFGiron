import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { RegistroCorrectoComponent } from 'src/app/shared/components/registro-correcto/registro-correcto.component';
import { CursosService } from '../../../shared/services/cursos.service';
import { EditarCursosComponent } from '../editar-cursos/editar-cursos.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy {

  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  dataSource!: MatTableDataSource<Curso>;
  columnas: String[] = ["nombre", "fechaInicio", "fechaFin", "estatus", "cupo", "profesor", "acciones"];
  suscription!: Subscription;
  duracionSnackbar = 5;

  constructor(private cursoService: CursosService, public dialog: MatDialog, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.suscription = this.cursos$.subscribe((cursos) => {
      this.dataSource = new MatTableDataSource<Curso>(cursos);
      this.cursos = cursos;
    })
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe;
  }

  editarCurso(curso: Curso) {
    const dialogRef = this.dialog.open(EditarCursosComponent, {
      data: curso
    });
  }

  eliminarCurso(idCurso: string) {
    this.cursoService.eliminarCurso(idCurso);
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(RegistroCorrectoComponent, {
      duration: this.duracionSnackbar * 1000,
      data: "Se eliminó el curso correctamente."
    });
  }
}
