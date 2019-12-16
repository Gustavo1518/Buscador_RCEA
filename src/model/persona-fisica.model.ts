import { IDomicilio } from './domicilio.model';
import { IInstitucion } from './institucion.model';

export interface IPersonaFisica {
    cvu?: string;
    curp?: string;
    titulo?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    rfc?: string;
    genero?: string;
    correo?: string;
    login?: string;
    gradoAcademico?: string;
    nivelsni?: string;
    instituciones?: IInstitucion[];
    domicilios?: IDomicilio[];
    paisResidencia?: string;
    rcea?: string;
}

export class PersonaFisica implements IPersonaFisica {
    constructor(
        public cvu?: string,
        public curp?: string,
        public titulo?: string,
        public nombre?: string,
        public apellidoPaterno?: string,
        public apellidoMaterno?: string,
        public rfc?: string,
        public genero?: string,
        public correo?: string,
        public login?: string,
        public gradoAcademico?: string,
        public nivelsni?: string,
        public instituciones?: IInstitucion[],
        public domicilios?: IDomicilio[],
        public paisResidencia?: string,
        public rcea?: string,
    ) { }
}