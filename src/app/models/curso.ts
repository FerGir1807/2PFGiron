export interface Curso {
    id: string;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    estatus: boolean;
    cupo: number;
    profesor: string;
}