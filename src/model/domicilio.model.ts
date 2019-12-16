export interface IDomicilio {
    direccion?: string;
    tipo?: string;
}

export class Domicilio implements IDomicilio {
    constructor(
        public direccion?: string,
        public tipo?: string,
    ) {
    }
}
