import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Curso } from 'src/app/models/curso';
import { RegistroCorrectoComponent } from 'src/app/shared/components/registro-correcto/registro-correcto.component';
import { CursosService } from '../../../shared/services/cursos.service';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent {
  formularioEditarCurso!: FormGroup;
  controlers: any;
  duracionSnackbar = 5;

  constructor(private dialogRef: MatDialogRef<EditarCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
    private cursosService: CursosService,
    private _snackBar: MatSnackBar
  ) {
    this.controlers = {
      nombre: new FormControl(data.nombre, Validators.required),
      fechaInicio: new FormControl(data.fechaInicio, Validators.required),
      fechaFin: new FormControl(data.fechaFin, Validators.required),
      estatus: new FormControl(data.estatus, Validators.required),
      cupo: new FormControl(data.cupo, [Validators.required, Validators.min(0), Validators.max(50)]),
      profesor: new FormControl(data.profesor, Validators.required),
    }
    this.formularioEditarCurso = new FormGroup(this.controlers);
  }

  editarCurso() {
    let curso: Curso = {
      id: this.data.id,
      nombre: this.controlers.nombre.value,
      fechaInicio: this.controlers.fechaInicio.value,
      fechaFin: this.controlers.fechaFin.value,
      estatus: this.controlers.estatus.value,
      cupo: this.controlers.cupo.value,
      profesor: this.controlers.profesor.value,
    }

    this.cursosService.editarCurso(curso);
    this.dialogRef.close();
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(RegistroCorrectoComponent, {
      duration: this.duracionSnackbar * 1000,
      data: "Se editó el curso correctamente."
    });
  }
}
