import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { RegistroCorrectoComponent } from 'src/app/shared/components/registro-correcto/registro-correcto.component';
import { AlumnosService } from 'src/app/shared/services/alumnos.service';
import { EditarAlumnosComponent } from '../editar-alumnos/editar-alumnos.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {

  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  dataSource!: MatTableDataSource<Alumno>;
  columnas: String[] = ["nombreCompleto", "edad", "genero", "estatus", "acciones"];
  suscription!: Subscription;
  duracionSnackbar = 5;

  constructor(public dialog: MatDialog, private alumnoService: AlumnosService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.suscription = this.alumnos$.subscribe((alumnos) => {
      this.dataSource = new MatTableDataSource<Alumno>(alumnos);
      this.alumnos = alumnos;
    })
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe;
  }

  editarAlumno(alumno: Alumno): void {
    const dialogRef = this.dialog.open(EditarAlumnosComponent, {
      data: alumno
    });
  }

  eliminarAlumno(idAlumno: string) {
    this.alumnoService.eliminarAlumno(idAlumno);
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(RegistroCorrectoComponent, {
      duration: this.duracionSnackbar * 1000,
      data: "Se eliminó el alumno correctamente."
    });
  }
}
