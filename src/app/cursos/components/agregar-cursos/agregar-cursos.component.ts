import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Curso } from 'src/app/models/curso';
import { RegistroCorrectoComponent } from 'src/app/shared/components/registro-correcto/registro-correcto.component';
import { v4 as uuidv4 } from 'uuid';
import { CursosService } from '../../../shared/services/cursos.service';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css']
})
export class AgregarCursosComponent {

  duracionSnackbar = 5;

  formularioAgregarCurso: FormGroup;
  controlers: any;
  constructor(private cursoService: CursosService, private _snackBar: MatSnackBar) {
    let regEx: string = "^[a-zA-Z ]+$";
    this.controlers = {
      nombre: new FormControl("", Validators.required),
      fechaInicio: new FormControl(Date, Validators.required),
      fechaFin: new FormControl(Date, Validators.required),
      estatus: new FormControl(false, Validators.required),
      cupo: new FormControl("", [Validators.required, Validators.min(0), Validators.max(50)]),
      profesor: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern(regEx)]),
    }
    this.formularioAgregarCurso = new FormGroup(this.controlers);
  }

  agregarCurso() {

    let curso: Curso = {
      id: uuidv4(),
      nombre: this.controlers.nombre.value,
      cupo: this.controlers.cupo.value,
      estatus: this.controlers.estatus.value,
      fechaInicio: this.controlers.fechaInicio.value,
      fechaFin: this.controlers.fechaFin.value,
      profesor: this.controlers.profesor.value
    }

    this.cursoService.agregarCurso(curso);
    this.openSnackBar();
    this.formularioAgregarCurso.reset();

  }

  openSnackBar() {
    this._snackBar.openFromComponent(RegistroCorrectoComponent, {
      duration: this.duracionSnackbar * 1000,
      data: "Se registró el curso correctamente."
    });
  }
}
