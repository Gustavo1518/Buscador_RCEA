import { IEntidadFederativa } from './entidad-federativa.model';

export interface IInstitucion {
    nombre?: string;
    localidad?: string;
    municipio?: string;
    clave?: string;
    entidadFederativa?: IEntidadFederativa;
}

export class Institucion implements IInstitucion {
    constructor(
        public nombre?: string,
        public localidad?: string,
        public municipio?: string,
        public clave?: string,
        public entidadFederativa?: IEntidadFederativa,
    ) {
    }
}
