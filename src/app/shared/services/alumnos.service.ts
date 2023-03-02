import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumno[] = [];
  private alumnos$: BehaviorSubject<Alumno[]>

  constructor() {
    this.alumnos$ = new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  agregarAlumno(Alumno: Alumno): void {
    this.alumnos.push(Alumno);
    this.alumnos$.next(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  obtenerDetalleAlumno(idAlumno: string): Alumno {
    let indice = this.alumnos.findIndex(a => a.id == idAlumno);
    return this.alumnos[indice];
  }

  editarAlumno(alumno: Alumno): void {
    let indice = this.alumnos.findIndex(a => a.id == alumno.id);
    if (indice > -1) {
      this.alumnos[indice] = alumno;
      this.alumnos$.next(this.alumnos);
    }
  }

  eliminarAlumno(idAlumno: string): void {
    let indice = this.alumnos.findIndex(a => a.id === idAlumno);
    if (indice > -1) {
      this.alumnos.splice(indice, 1);
      this.alumnos$.next(this.alumnos);
    }
  }

  editarCursosAlumno(idAlumno: string, cursos: Curso[]) {
    let indice = this.alumnos.findIndex(a => a.id === idAlumno);
    if (indice > -1) {
      this.alumnos[indice].cursosInscrito = cursos;
      this.alumnos$.next(this.alumnos);
    }
  }
}
